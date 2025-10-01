import { NextRequest, NextResponse } from "next/server";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  renderToStream,
  Image,
} from "@react-pdf/renderer";
import { PropostaResponse } from "../types/response-proposta-type";
import { text } from "stream/consumers";
import { Card } from "../components/card";
import { Header } from "../components/Header";

import { styles } from "./styles";
import { Footer } from "../components/Footer";

// Create Document Component

type MyDocumentProps = {
  document: PropostaResponse;
};

const MyDocument = ({ document }: MyDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.container}>
       <Header document={document}/>
        {document.produtos.map((item, index) => (

          <View key={index} style={{width:"100%", }}>
            <Card produto={item} index={index+1}  />
          </View>
        ))}
        <Footer document={document}/>
        <Image source={"https:" + document.empresa.Rodape_imagem} style={styles.footer}  />
      </View>
    </Page>
  </Document>
);

export async function GET(request: NextRequest) {
  // const mode = request.nextUrl.searchParams.get("mode");
  const id = request.nextUrl.pathname.split("/").pop();

  const response = await fetch(
    "https://nasago.bubbleapps.io/version-test/api/1.1/wf/proposta",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        propostaId: id,
      }),
    }
  );

  const raw = await response.json();

  if (raw?.status === "success" && raw.response) {
    const documentData = raw.response as PropostaResponse;

    const stream = await renderToStream(<MyDocument document={documentData} />);
    return new NextResponse(stream as unknown as ReadableStream);
  }

  return new NextResponse("Erro ao gerar proposta", { status: 500 });
}
