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


export const Footer = ({ document }: MyDocumentProps) => (

    <View>
        <View style={styles.content}>
            <Text style={styles.title}>
                Valdiade: {new Date(document.proposta.Validade).toLocaleDateString('pt-BR')}
            </Text>

            <Text style={styles.title}>
                Criador: {document.proposta.Consultor_TXT}
            </Text>
            <View>
                <View style={styles.groupTotal}>
                    <Text style={styles.title}>Soma</Text>
                    <Text style={styles.value}>R${document.proposta.Valor_da_proposta}</Text>
                </View>

                
            </View>
        </View>


    </View>
)