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
import { PropostaResponse } from "@/app/types/response-proposta-type";
import { text } from "stream/consumers";
import { Card } from "@/app/components/card";

// Create styles
{
  /*Rodar: npm run dev */
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 32,
    gap: 16,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  productSection: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 10,
    gap: 10,
  },
  title: {
    padding: 10,
    fontWeight: "700",
    fontSize: 14,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    color: "#6B6B6B",
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    color: "#2E2E2E",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
});



// Create Document Component

type MyDocumentProps = {
  document: PropostaResponse;
};

const MyDocument = ({ document }: MyDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{ gap: 4 }} fixed={true}>
        {/* Header */}

        <Text style={styles.subtitle}>
          Empresa: <Text style={{ fontWeight: "500" }}> COMPANY_NAME </Text>{" "}
        </Text>
        <Text style={styles.subtitle}>Aos cuidados de: BEATRIZ BONA</Text>
      </View>
      <View style={{ marginVertical: 24, alignItems: "center", gap: 4 }}>
        <Text style={{ marginVertical: 24, fontWeight: "600" }}>
          {document.proposta.title}
        </Text>
        {document.produtos.map((item, index) => (

          <View key={index} wrap={false}>
            <Card produto={item} index={index+1}  />
          </View>
        ))}
        <View
          style={{
            width: "100%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 12 }}>TOTAL</Text>
          <Text> R$ { } </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 32,
          }}
        >
          <View>
            <Text>Validade</Text>
          </View>
          <View>
            <Text>Forma</Text>
          </View>
          <View>
            <Text>Criador</Text>
          </View>
        </View>
        <View>{/* Footer */}</View>
      </View>
    </Page>
  </Document>
);

export async function GET(request: NextRequest) {
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
