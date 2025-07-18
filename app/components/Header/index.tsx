import { PropostaResponse, Produto } from "@/app/types/response-proposta-type";
import { styles } from "./styles";
import {
    Text,
    View,
    Image,
} from "@react-pdf/renderer";

type MyDocumentProps = {
    document: PropostaResponse;
};


export const Header = ({ document }: MyDocumentProps) => (

    <View>

        <Image source={"https:" + document.empresa.cabecalho_Imagem} />
        <View style={styles.container} fixed={true}>
            <Text style={styles.subtitle}>
                Para: <Text style={{ fontWeight: "500" }}> {document.lead.name} </Text>{" "}
            </Text>
            <Text style={styles.subtitle}>Aos cuidados de: <Text style={[styles.subtitle, {fontWeight: "500"}]}>{document.proposta.Consultor_TXT}</Text></Text>
        </View>
        <View style={{ marginVertical: 0, alignItems: "center", gap: 4 }}>
            <Text style={{ marginVertical: 16, fontWeight: "600" }}>
                {document.proposta.title}
            </Text>

        </View>
    </View>
)