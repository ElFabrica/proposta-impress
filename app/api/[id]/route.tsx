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

// Create styles
{
  /*Rodar: npx run dev */
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

const products = [
  {
    name: "Social Media Management",
    description:
      "Comprehensive management of social media profiles including content creation, scheduling, audience engagement, and performance analytics.",
    note: "Monthly subscription plan. Includes up to 4 social platforms.",
    quantity: 1,
    unit_price: 1200.0,
  },
  {
    name: "Search Engine Optimization (SEO)",
    description:
      "On-page and off-page SEO services aimed at improving website visibility in search engine results through keyword optimization, technical improvements, and backlink strategies.",
    note: "Includes an initial audit and monthly performance report.",
    quantity: 1,
    unit_price: 950.0,
  },
  {
    name: "Google Ads Campaign",
    description:
      "Planning, creation, and management of Google Ads campaigns to drive targeted traffic and generate conversions for your business.",
    note: "Ad spend not included. Minimum 3-month contract recommended.",
    quantity: 1,
    unit_price: 800.0,
  },
  {
    name: "Brand Identity Design",
    description:
      "Development of a complete visual identity including logo, color palette, typography, and brand style guide for consistent and professional communication.",
    note: "Includes three initial concepts and two revision rounds.",
    quantity: 1,
    unit_price: 1500.0,
  },
  {
    name: "Email Marketing Campaign",
    description:
      "Creation and distribution of targeted email campaigns using professional templates, automation, and performance tracking to nurture leads and retain customers.",
    note: "Up to 10,000 emails per month included.",
    quantity: 1,
    unit_price: 600.0,
  },
  {
    name: "Content Marketing Strategy",
    description:
      "Custom content strategy tailored to your audience and brand goals, including blog planning, topic research, and SEO alignment for organic traffic growth.",
    note: "One-month plan including up to 8 content pieces.",
    quantity: 1,
    unit_price: 1100.0,
  },
  {
    name: "Video Production (Short Ad)",
    description:
      "Production of a high-quality promotional video of up to 60 seconds, including scriptwriting, shooting, editing, and motion graphics.",
    note: "One revision round included. Requires client approval at storyboard phase.",
    quantity: 1,
    unit_price: 1800.0,
  },
  {
    name: "Website Audit Report",
    description:
      "Detailed audit of your existing website to identify technical issues, UX problems, SEO gaps, and content recommendations for better performance.",
    note: "Includes PDF report and 30-minute consultation.",
    quantity: 1,
    unit_price: 400.0,
  },
];

const total = products.reduce((sum, product) => {
  return sum + product.unit_price * product.quantity;
}, 0);

type proposta = {
  title: string;
  description: string;
  creator: string;
  paraQuem: string;
  aosCuidados: string;
};
type produto = {
  title: string;
};

// Create Document Component

const MyDocument = () => (
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
          Proposta "NOME DA PROPOSTA"
        </Text>
        {products.map((item, index) => (
          <View key={index} style={styles.productSection} wrap={false}>
            <Text style={styles.title}>
              {" "}
              {index + 1} {item.name}{" "}
            </Text>

            <Text style={{ fontSize: 10, color: "#5E5E5E", fontWeight: "700" }}>
              DESCRIÇÃO
            </Text>

            <Text style={styles.description}> {item.description} </Text>
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Text
                style={[
                  styles.description,
                  { fontSize: 8, textAlign: "center" },
                ]}
              >
                VALOR UNITÁRIO
              </Text>
              <Text style={styles.title}> R$ {item.unit_price} </Text>
            </View>
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
          <Text> R$ {total} </Text>
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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = request.nextUrl.pathname.split("/").pop(); // extrai o ID da URL

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

  const data = await response.json();

  console.dir(data, { depth: null });

  const stream = await renderToStream(<MyDocument />);

  return new NextResponse(stream as unknown as ReadableStream);
}
