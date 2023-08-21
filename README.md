<h1 align="center">
  <img alt="BRQ Movies" height="80" src="https://github.com/felipefreitasa/brqmovies/assets/77179768/1b4e00c3-d6ae-49e8-b43f-51cbbfefb135" />
</h1>

![cover](https://github.com/felipefreitasa/brqmovies/assets/77179768/0e2a713b-7c00-4410-a994-75a4d8fe7e7e)

## 💻 BRQ Movies

O aplicativo "BRQ Movies" é uma plataforma dinâmica e intuitiva que oferece aos usuários uma experiência completa no mundo cinematográfico. Com uma interface moderna e amigável, o BRQ Movies se destaca por fornecer acesso instantâneo aos filmes mais populares do momento.

Através do aplicativo, os usuários podem explorar uma lista atualizada dos filmes que estão fazendo sucesso tanto nas bilheteiras quanto entre os críticos. Além disso, o BRQ Movies permite que os usuários mergulhem mais fundo nas produções, oferecendo detalhes abrangentes sobre cada filme.


## :hammer_and_wrench: Funcionalidades 
- [x] **Autenticação segura**: Realize o login com validações rigorosas de entrada, incluindo verificação de campos obrigatórios. Além disso, a senha aceita apenas valores numéricos para garantir maior segurança. As validações foram implementadas utilizando React Hook Form e Yup, proporcionando um processo de autenticação eficaz e confiável.
- [x] **Filmes populares em tempo real**: Mantenha-se atualizado com a listagem dos filmes mais populares do momento. A lista é atualizada dinamicamente sempre que o usuário faz login na aplicação, uma vez que os dados são obtidos da API themoviedb. As requisições à API themoviedb foram feitas utilizando a biblioteca Axios, garantindo uma comunicação eficiente e assíncrona entre a aplicação e o servidor. 
- [x] **Detalhes abrangentes dos filmes**: Explore os detalhes de cada filme, incluindo capa, título, descrição e informações estatísticas, como popularidade e data de lançamento.
- [x] **Lista de favoritos personalizada**: Tenha a liberdade de adicionar seus filmes preferidos à lista de favoritos, proporcionando uma experiência de usuário mais personalizada. Essa lista de favoritos é salva de forma persistente utilizando o Async Storage, permitindo que os filmes selecionados como favoritos permaneçam disponíveis mesmo após o usuário fechar e reabrir a aplicação. Isso garante que as escolhas do usuário sejam mantidas, tornando a interação com a aplicação mais conveniente e personalizada.
- [x] **Verificação de conectividade**: Ao integrar o pacote react-native-community/netinfo, o aplicativo verifica de forma proativa se o dispositivo do usuário está conectado à internet. Essa verificação em tempo real permite ajustar dinamicamente o conteúdo e as funcionalidades da aplicação para se adequar às condições de conexão.
- [x] **Experiência de usuário aprimorada**:  Desfrute de animações e transições de tela suaves e fluidas, feitas com React Native Reanimated e React Native Gesture Handler. Essas bibliotecas permitem criar animações altamente responsivas e interativas, elevando significativamente a qualidade da experiência do usuário (UX).
- [x] **Gerenciamento de estado**: A aplicação utiliza a Context API do React para um gerenciamento de estado eficiente e escalável. Isso permite compartilhar dados de forma global entre diferentes componentes, eliminando a necessidade de prop drilling e simplificando o fluxo de dados.
- [x] **Estilização**: Os estilos da aplicação foram desenvolvidos utilizando Styled Components. Essa abordagem permite a criação de estilos reutilizáveis, coesos e facilmente ajustáveis. Além disso, foi criado um tema disponível por todo o aplicativo, facilitando a implementação de um tema global.
- [x] **Testes automatizados**: Os testes foram realizados com Jest e Testing Library, para assegurar a qualidade e robustez da aplicação.
- [x] **Path mapping**: A estrutura do projeto é otimizada para facilitar a navegação e importação de arquivos. O Babel Plugin Module Resolver é configurado para permitir a utilização de caminhos curtos e significativos ao importar módulos, tornando o código mais limpo e legível.


## ⌨️ Tecnologias 
- [x] React Native
- [x] Typescript
- [x] Styled Components
- [x] Expo
- [x] React Navigation
- [x] React Native Reanimated
- [x] React Native Gesture Handler
- [x] React Hook Form
- [x] Yup
- [x] Axios
- [x] Expo Vector Icons
- [x] Expo Google Fonts
- [x] Context API
- [x] Async Storage
- [x] Babel Plugin Module Resolver
- [x] Net Info
- [x] Jest
- [x] Testing Library
      

## 🔌 Variáveis de ambiente

Para executar este projeto, você precisará adicionar as seguintes variáveis ​​de ambiente ao seu arquivo .env

`MOVIE_DB_API`: URL padrão da API themoviedb (https://api.themoviedb.org)

`MOVIE_DB_API_IMAGE`: URL para o carregamento da imagem do filme (https://image.tmdb.org/t/p/w500)

`MOVIE_DB_API_KEY`: Chave única obtida na documentação da API (https://www.themoviedb.org/settings/api)


## ▶️ Como executar o aplicativo ?

1. Clone o projeto
```bash
  git clone https://github.com/felipefreitasa/brqmovies.git
```

2. Entre na pasta do projeto
```bash
  cd brqmovies
```

3. Instale as dependências
```bash
  yarn
```

Inicialize a aplicação
```bash
  npx expo start
```
