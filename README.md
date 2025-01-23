<p align="center">
  <img src="https://kucdinteractive.com/lgreger/business/images/logo.png" alt="Descrição da imagem" width="400"/>
</p>

# Dragonfly Inn

A Dragonfly Inn é uma pousada encantadora e acolhedora, localizada em um ambiente tranquilo. É um lugar pequeno, com uma atmosfera rústica e charmosa, um refúgio ideal para quem busca descanso e conforto. A decoração é simples, mas aconchegante, e a pousada tem um restaurante que serve pratos caseiros e deliciosos, criando um ambiente acolhedor tanto para os hóspedes quanto para os moradores locais.

## Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Instalar](#como-instalar)
- [Como Usar](#como-usar)
- [Consideracoes](#consideracoes)

## Sobre

Utilizado para verificar reservas disponíveis e criar reservas, da [API/back-end](https://github.com/ulcas/dragonflyinn-hotel).
Para utilizar, é necessário executar a API, todos os passos de como instalar e executar você encontra aqui: [README](https://github.com/ulcas/dragonflyinn-hotel/tree/main?tab=readme-ov-file#sobre)

## Funcionalidades

- [ ] Verifica os quartos disponiveis
- [ ] Cria uma reserva para um determinado quarto

## Tecnologias Utilizadas

- [Next.JS](https://nextjs.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/)
- [Node](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/)
- [npm](https://www.npmjs.com/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Laravel-Breeze](https://github.com/laravel/breeze)
- [Git](https://git-scm.com/)
- [API Restful](https://aws.amazon.com/pt/what-is/restful-api/)

## Como Instalar

**APÓS EXECUTAR TODO O PROCESSO DESCRITO NO [README DO BACK-END](https://github.com/ulcas/dragonflyinn-hotel/tree/main?tab=readme-ov-file#sobre)** 

1. Clone o repositório:
    ```bash
    git clone https://github.com/ulcas/dragonflyinn-hotel-front
    ```
2. Acesse o diretório do projeto:
    ```bash
    cd dragonflyinn-hotel-front
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Como Usar

Esta aplicação é dependente do back-end, portanto, deve ser executada junto com a aplicação back-end.

1. Na raiz do projeto, duplique o arquivo `.env.example` e renomeie para `.env.local` 
2. Execute o comando:
    ```bash
    npm run dev
    ```
3. Acesse a URI por alguma plataforma de API com o método GET ou através do browser `http://localhost:3000/`.
    - A tela de Reservas Disponíveis deve aparecer (se houver uma, claro :D)
4. Os end-point utilizados foram:

| Método    | end-point | Tipo de campo | Descrição |
| -------   | ----- | ------------- | ----------- |
| GET       | api/quarto | nenhum | Retorna os quartos disponiveis |
| POST      | api/reserva | body | Cria uma reserva |

## Consideracoes

Algumas considerações importantes para o melhor uso da aplicação:

- Não é possível alterar/remover os quartos, eles são mockados
- O e-mail é uma chave única
- Este projeto é para uso local e para teste, portanto, a segurança não foi uma preocupação aqui
- Algumas regras foram deixadas de lado pela complexidade e o pouco tempo de desenvolvimento, como as regras de data
- Nem todas as funcionalidades da API estão no front-end, pois o briefing desta atividade deixava claro quais eram as ações que deveriam ser executadas.
- Caso queira resetar o projeto, basta realizar o comando: `php artisan migrate:refresh --seed`
