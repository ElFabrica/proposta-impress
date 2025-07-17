import { PropostaResponse, Produto } from "@/app/types/response-proposta-type";
import { styles } from "./styles";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  renderToStream,
  Image,
} from "@react-pdf/renderer";
 
type MyDocumentProps = {
  produto: Produto;
  index: number
};


export const Card = ({produto, index}: MyDocumentProps)=> (
<View style={styles.container}>

    <View style={styles.header}>
    <Text style={styles.title}> {index}- {produto.nome_produto_proposta}</Text>
    </View>

    <Text style={styles.subtitles}>
        Descrição
            </Text>
        <Text style={styles.desctiption } >
        {produto.descricao_produto_proposta}
        </Text>

    <View style={styles.footer}>
        <View>
            <Text>Valor Hunitário</Text>
            <View style={styles.containerFooter}>
            <Text > R${ produto.total_valor } </Text>
            </View>
        </View>
    </View>

</View>
)