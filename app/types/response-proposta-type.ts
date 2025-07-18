export interface PropostaResponse {
  proposta: Proposta;
  produtos: Produto[];
  empresa: Empresa;
  lead: Lead
}

export interface Proposta {
  title: string;
  Foto_IMG: string;
  Validade: number;
  Consultor_TXT: string;
  Proposta_deletada: boolean;
  Empresa: string;
  Proposta_alterada: boolean;
  "Created By": string;
  "Created Date": number;
  Valor_da_proposta: number;
  _id: string;
  lead_new: string;
  Observacoes: string;
  Status_da_Proposta: string;
  tipo_documento: string;
  "Modified Date": number;
  Num_Proposta_cotacao: number;
}

export interface Produto {
  quantidade: number;
  valor_produto_proposta: number;
  proposta_cotacao: string;
  "Created Date": number;
  "Created By": string;
  descricao_produto_proposta: string;
  "Modified Date": number;
  produto_serviço: string;
  total_valor: number;
  n_proposta_produto_proposta: number;
  nome_produto_proposta: string;
  empresa_pdt_proposta: string;
  usuario_pdt_proposta: string;
  _id: string;
}

export interface Empresa {
  Saldo: number;
  Contato_whatsapp: string;
  CNPJ: string;
  Meta_valor: number;
  link_drive: string;
  Projetos_especiais: boolean;
  Timbrado: string;
  "E-mail_empresa_e_loja": string;
  configs_nasa_Links: string;
  IAisActive: boolean;
  _id: string;
  "N.A.S.A": boolean;
  Endereço_empresa_loja: string;
  meta_comissao: number;
  Slug: string;
  ativa: boolean;
  "z_instancia_Z-API": string;
  Meta_mes: number;
  "z_token_Z-API": string;
  "z_client-token_Z-API": string;
  cod_acesso: string;
  Meta_Token: string;
  Nome_Empresa: string;
  "Created Date": number;
  Rodape_imagem: string;
  "logotipo_empresa/loja": string;
  "Created By": string;
  "Modified Date": number;
  Nome_da_meta: string;
  EquipeS: string[];
  cabecalho_Imagem: string;
  Meta_anual: number;
  crm_views_page: (string | null)[];
  Metas_produtos: string[];
}
export type Lead = {
  phone: string; // Ex: '+55 (86) 99920-8959'
  status_person: string; // ID ou chave relacionada ao status da pessoa
  empresa: string; // ID da empresa
  fromMe: boolean;
  crm: string; // ID do CRM
  arquivado: boolean;
  Interessado: boolean;
  name: string; // Ex: 'Digite nome do cliente'
  active: boolean;
  type_lead: string; // Ex: 'Aberto'
  order: number; // Ex: -2.8779296875
  acompanhamento_act: string; // Ex: 'Aguardando'
  "Modified Date": number; // timestamp em milissegundos
  "Created Date": number; // timestamp em milissegundos
  "Created By": string; // ID do usuário criador
};
