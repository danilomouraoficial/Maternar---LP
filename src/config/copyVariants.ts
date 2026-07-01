export interface CopyContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  cta: string;
}

export interface CopyVariant {
  id: string;
  name: string;
  hero: CopyContent;
  finalCta: CopyContent;
}

export const COPY_VARIANTS: Record<string, CopyVariant> = {
  v1: {
    id: 'v1',
    name: 'Controle (Carga Mental)',
    hero: {
      eyebrow: 'VOCÊ NÃO PRECISA CARREGAR TUDO SOZINHA',
      headline: 'Sua cabeça já está <em>cheia demais</em> pra também ter que lembrar de tudo sobre o bebê <em>sozinha</em>.',
      subheadline: 'O Maternar organiza vacinas, remédios e consultas automaticamente — e ainda cuida de você nessa fase tão intensa.',
      cta: 'Quero organizar minha rotina'
    },
    finalCta: {
      eyebrow: 'Paz Mental ao Seu Alcance',
      headline: 'A sua cabeça merece este <em>respiro</em>.',
      subheadline: 'Garanta a organização que sua família precisa e traga leveza para o seu puerpério.',
      cta: 'Garantir Meu Acesso'
    }
  },
  v2: {
    id: 'v2',
    name: 'Saúde Mental da Mãe / Auto-cuidado',
    hero: {
      eyebrow: 'O CUIDADO QUE VOCÊ TAMBÉM MERECE',
      headline: 'Quem cuida de você enquanto você cuida do seu bebê?',
      subheadline: 'O Maternar organiza a rotina de saúde do seu filho para você ter tempo de respirar, tomar um banho demorado e dormir sem culpa.',
      cta: 'Quero paz mental no puerpério'
    },
    finalCta: {
      eyebrow: 'Você Não Está Só',
      headline: 'Traga mais <em>leveza</em> para os seus dias com o bebê.',
      subheadline: 'Simplifique o acompanhamento da saúde do seu filho e recupere seu espaço de cuidado pessoal no pós-parto.',
      cta: 'Quero mais leveza no meu dia'
    }
  },
  v3: {
    id: 'v3',
    name: 'Automação e Praticidade (Funcional)',
    hero: {
      eyebrow: 'VACINAS, CONSULTAS E REMÉDIOS EM UM SÓ LUGAR',
      headline: 'Nunca mais se preocupe se esqueceu a hora do remédio ou a próxima vacina.',
      subheadline: 'Centralize a saúde do seu bebê em um app intuitivo que notifica você no momento certo e simplifica o seu dia a dia.',
      cta: 'Quero testar grátis por 7 dias'
    },
    finalCta: {
      eyebrow: 'Controle Total e Simplicidade',
      headline: 'A saúde do seu bebê na palma da <em>sua mão</em>.',
      subheadline: 'Diga adeus à confusão de datas e papéis soltos. Centralize tudo em um único aplicativo inteligente.',
      cta: 'Começar Agora Mesmo'
    }
  },
  v4: {
    id: 'v4',
    name: 'Divisão de Carga Mental (Rede de Apoio)',
    hero: {
      eyebrow: 'O FIM DA SOBRECARGA MATERNA',
      headline: 'Divida a carga mental da rotina do bebê com quem te apoia.',
      subheadline: 'Compartilhe o histórico de vacinas, horários de remédios e calendário de consultas com seu parceiro, avós ou babá em tempo real.',
      cta: 'Simplificar nossa rotina agora'
    },
    finalCta: {
      eyebrow: 'Rotina Compartilhada',
      headline: 'Cuide do seu bebê em <em>parceria</em> e sem ruídos.',
      subheadline: 'Garanta que todos na rede de apoio saibam exatamente o que o bebê precisa, quando precisa.',
      cta: 'Compartilhar Cuidado e Rotina'
    }
  },
  v5: {
    id: 'v5',
    name: 'Alívio Imediato / Direto',
    hero: {
      eyebrow: 'CHEGA DE CADERNINHOS E ESQUECIMENTOS',
      headline: 'Sobreviva ao puerpério com a rotina do seu bebê 100% sob controle.',
      subheadline: 'Esqueça os papéis e anotações na geladeira. O Maternar calcula as datas de vacinas e envia alertas automáticos para você relaxar.',
      cta: 'Começar agora mesmo'
    },
    finalCta: {
      eyebrow: 'Chega de Estresse',
      headline: 'Elimine os esquecimentos e a <em>ansiedade</em>.',
      subheadline: 'Tenha o controle total da rotina de vacinas e consultas do seu bebê de forma simples, automatizada e sem complicação.',
      cta: 'Organizar Rotina Agora'
    }
  }
};

export const DEFAULT_VARIANT_KEY = 'v1';
