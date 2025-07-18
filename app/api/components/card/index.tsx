import { PropostaResponse, Produto } from "../../types/response-proposta-type";
import { styles } from "./styles";
import {
  Text,
  View,
} from "@react-pdf/renderer";
 
type MyDocumentProps = {
  produto: Produto;
  index: number
};
// utils/pdfTextSanitizer.ts
export function limparRichTextBubble(texto: string): string {
  if (!texto) return "";

  return texto
    // Remove tags tipo [b], [color=...], [highlight=...], [center], etc.
    .replace(/\[\/?(?:b|color|highlight|center)(?:=[^\]]*)?]/gi, '')
    // Remove quaisquer outras tags não tratadas (failsafe)
    .replace(/\[\/?.+?]/g, '')
    // Normaliza espaços e quebras de linha
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

export const Card = ({produto, index}: MyDocumentProps)=> (
<View style={styles.container}>

    <View style={styles.header}>
    <Text style={styles.title}> {index}- {produto.nome_produto_proposta}</Text>
    </View>

    <Text style={styles.subtitles}>
        Descrição
            </Text>
        <Text style={styles.desctiption } >
        {limparRichTextBubble(produto.descricao_produto_proposta)}
        </Text>

    <View style={styles.footer}>
        <View>
            <Text style={styles.valUnit}>Valor Hunitário</Text>
            <View style={styles.containerFooter}>
            <Text style={styles.total}> R${ produto.total_valor || "0,00" } </Text>
            </View>
        </View>
    </View>

</View>
)