# Boutique do Esmalte

## Visão geral

Desenvolvido com [React Native](https://reactnative.dev/), o aplicativo busca aperfeiçoar o atendimento dos serviços oferecidos pelas esmalterias e oferecer autonomia aos consumidores no agendamento e contratação dos serviços.

### Proposta

Consiste na criação de uma agenda em que todas as manicures terão seu login individual, que pode ser configurado conforme seu horário de trabalho e tempo de realização de cada serviço. Cada cliente irá escolher o horário de agendamento com os valores de cada serviço e o total a ser cobrado.

Quando for uma Esmalteria com mais de uma funcionária realizando o mesmo tipo de serviço, a cliente irá realizar seu cadastro e poderá escolher a manicure ou ainda visualizar a agenda de todas, possibilitando o agendamento dentro de sua disponibilidade e, ao escolher o tipo de serviço que realizará, o sistema informará o tempo e valor total do serviço escolhido no ato do agendamento.

### Requisitos funcionais

1. Criar conta
2. Escolher tipo de usuário (cliente ou profissional)
3. Logar no aplicativo
4. Visualizar todas as profissionais cadastradas
5. Visualizar detalhes da profissional
6. Alterar dados da conta do usuário
7. Marcar um atendimento
8. Visualizar lista de atendimentos marcados (somente visível para a profissional)

### Requisitos não funcionais

1. Armazenamento dos dados de perfil do usuário no dispositivo
2. Mostrar/Ocultar componentes de acordo com o tipo de usuário logado
3. Ao tirar foto com a câmera, salvar na galeria do dispositivo
4. Verificar se existe um token válido de um usuário que se logou no app. Caso exista, entrar direto na página principal.

## Grupo

[Andressa Martins Pereira](https://www.facebook.com/andressa.martinspereira)
- Conceito geral do aplicativo
- Design UI/UX
- Testes

[Miguel Soares de Oliveira](https://www.facebook.com/miguelosoares)
- Desenvolvimento
- Testes

## Bibliotecas

- [React Navigation](https://github.com/react-navigation/react-navigation) : `npm i react-navigation`
- [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated) : `npm i react-native-reanimated`
- [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler) : `npm i react-native-gesture-handler`
- [React Navigation Drawer](https://github.com/react-navigation/drawer) : `npm i react-navigation-drawer`
- [React Navigation Stack](https://github.com/react-navigation/stack) : `npm i react-navigation-stack`
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context) : `npm i react-native-safe-area-context`
- [React Native MaskedView](https://github.com/react-native-community/react-native-masked-view) : `npm i @react-native-community/masked-view`
- [React Navigation Animated Switch](https://github.com/react-navigation/animated-switch) : `npm i react-navigation-animated-switch`
- [Styled Components](https://github.com/styled-components/styled-components) : `npm i styled-components`
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) : `npm i react-native-vector-icons` -> `react-native link react-native-vector-icons`
- [axios](https://github.com/axios/axios) : `npm i axios`
- [React Native Async Storage](https://github.com/react-native-community/async-storage) : `npm i @react-native-community/async-storage`
- [React Native Calendars](https://github.com/wix/react-native-calendars) : `npm i react-native-calendars`
- [React Native Modal](https://github.com/react-native-community/react-native-modal) : `npm i react-native-modal`
- [Moment.js](https://github.com/moment/moment/) : `npm i moment`
- [React Native Picker Select](https://github.com/lawnstarter/react-native-picker-select) : `npm i react-native-picker-select`
- [buffer](https://github.com/feross/buffer): `npm i buffer`

---

## How to

- Create project: `npx react-native init AwesomeProject`
- Start app server: `npm start`
- Emulate: You can use Android Studio to open `./AwesomeProject/android` and then start your virtual device
- Reset cache: `npm start -- --reset-cache`

## Libraries

- [React Navigation](https://github.com/react-navigation/react-navigation): `npm i react-navigation`
- [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated): `npm i react-native-reanimated`
- [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler): `npm i react-native-gesture-handler`
To finalize installation of `react-native-gesture-handler` for Android:
If you are using a native navigation library like `wix/react-native-navigation` you need to follow a different setup for your Android app to work properly. The reason is that both native navigation libraries and Gesture Handler library need to use their own special subclasses of ReactRootView.
Instead of changing Java code you will need to wrap every screen component using `gestureHandlerRootHOC` on the JS side. This can be done for example at the stage when you register your screens.
- [React Navigation Drawer](https://github.com/react-navigation/drawer): `npm i react-navigation-drawer`
- [React Navigation Stack](https://github.com/react-navigation/stack): `npm i react-navigation-stack`
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context): `npm i react-native-safe-area-context`
- [React Native MaskedView](https://github.com/react-native-community/react-native-masked-view): `npm i @react-native-community/masked-view`
- [React Navigation Animated Switch](https://github.com/react-navigation/animated-switch): `npm i react-navigation-animated-switch`
- [Styled Components](https://github.com/styled-components/styled-components): `npm i styled-components`
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons): `npm i react-native-vector-icons` -> `react-native link react-native-vector-icons`
- [axios](https://github.com/axios/axios): `npm i axios`
- [React Native Async Storage](https://github.com/react-native-community/async-storage): `npm i @react-native-community/async-storage`
- [React Native Calendars](https://github.com/wix/react-native-calendars): `npm i react-native-calendars`
- [React Native Modal](https://github.com/react-native-community/react-native-modal): `npm i react-native-modal`
- [Moment.js](https://github.com/moment/moment/): `npm i moment`
- [React Native Picker Select](https://github.com/lawnstarter/react-native-picker-select): `npm i react-native-picker-select`
- [React Native Image Picker](https://github.com/react-native-community/react-native-image-picker): `npm i react-native-image-picker`
- [buffer](https://github.com/feross/buffer): `npm i buffer`

## Troubleshooting

- If `react-native link` doesn't work: `npm i -g react-native-cli`

- `error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class. Run CLI with --verbose flag for more details.
SyntaxError: Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class
    at new RegExp (<anonymous>)`

This is caused by node v12.11.0+ due to the way it deals regular location. There's two ways to solve this problem:

#### Method I

You can downgrade to node v12.10.0. This will apply the correct way to deal with parsing error.

#### Method II

You can correctly terminate the regular expression in your case by changing the file located at `\node_modules\metro-config\src\defaults\blacklist.js` from:

```javascript
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

To:

```javascript
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

## License

    MIT License

    Copyright (c) 2019 Miguel Soares de Oliveira

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
