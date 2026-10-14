/**
 * CONFIGURAÇÕES GERAIS DO PORTFÓLIO
 * 
 * Informações profissionais e de contato do psicólogo.
 * Atualizado com base no cartão profissional oficial.
 */

const SITE_CONFIG = {
  // Informações Pessoais e Profissionais
  nome: "Alexandre Teixeira do Nascimento Silva",
  nomeCurto: "Alexandre Teixeira",
  titulo: "Psicólogo Clínico",
  subtitulo: "Atendimento Presencial e Online",
  
  // Foto do Psicólogo
  fotoUrl: "assets/perfil.jpeg",

  // Registro Profissional (CFP)
  crp: "CRP 13/14462",
  crpTexto: "Inscrição ativa no Conselho Regional de Psicologia (CRP-13)",

  // Contato e WhatsApp
  // Formato internacional: DDI (55) + DDD (83) + Número (986736686)
  whatsappNumero: "5583986736686",
  whatsappExibicao: "(83) 98673-6686",
  whatsappMensagemPadrao: "Olá, Alexandre! Gostaria de informações sobre agendamento de consulta de psicoterapia.",
  
  // Rede Social Instagram (Altere para seu usuário e link reais)
  instagramUsuario: "@alexandret.psicologo",
  instagramUrl: "https://www.instagram.com/alexandret.psicologo/",

  // Localização e Endereço do Consultório Presencial
  enderecoCompleto: "Rua Vidal de Negreiros, nº 48 – Centro, Prédio Juraci Cavalcante, 3º andar",
  modalidades: "Atendimento Presencial e Online",
  duracaoSessao: "50 minutos"
};

// Exporta para compatibilidade se necessário
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
