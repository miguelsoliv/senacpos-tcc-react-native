export default function HandleAPIErrorMessage(originalMessage) {
  let message = 'Process error'

  switch (originalMessage) {
    case 'User not found':
      message = 'Nenhum usuário encontrado.'
      break
    case 'Invalid password':
      message = 'Usuário ou senha inválida.'
      break
    case 'User authentication failed':
      message = 'Erro ao autenticar o usuário.'
      break
    case 'Token expired, generate a new one':
      message = 'Seu token expirou, solicite outro.'
      break
    case 'Could not send forgot password email':
      message = 'Não foi possível enviar o e-mail de recuperação de senha, tente novamente mais tarde.'
      break
    case 'Can\'t get user info':
      message = 'Erro ao retornar os dados de usuário.'
      break
    case 'User already exists':
      message = 'Já existe um usuário cadastrado com este endereço de e-mail.'
      break;
    case 'User registration failed':
      message = 'Erro ao cadastrar usuário.'
      break
  }

  return message
}
