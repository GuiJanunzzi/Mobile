//Componentes do TanQuery
import { QueryClient, QueryClientProvider as TanstackProvider } from "@tanstack/react-query"; 

//Cria uma instancia do QueryClient (controlar error, loading, etc)
const queryClient = new QueryClient()

//Um componente que ira envolver a minha aplicação
//Que vai permitir que componente filho acesse o tanQuery
export default function QueryClientProvider({children}) {
  return (
    <TanstackProvider client={queryClient}>
        {children}
    </TanstackProvider>
  )
}
