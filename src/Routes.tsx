import {
  ActivacoesDeTerceiros,
  BackOffice,
  Consultor,
  ContractosActivos,
  ContractosFinalizados,
  ContractosPendentes,
  CustodiarArrendar,
  Documentacao,
  Login,
  PagamentosPendentes,
  PagamentosRecebidos,
  PlanoDeCarreira,
  PremiacoesSolicitadas,
  Saldo,
  SaldoEspecial,
  SolicitarPagamento,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Routes />,
  },
  {
    path: "/backoffice",
    element: <BackOffice />,
  },
  {
    path: "/criptoativo/custodiar-arrendar",
    element: <CustodiarArrendar />,
  },
  {
    path: "/criptoativo/solicitar-pagamento",
    element: <SolicitarPagamento />,
  },
  {
    path: "/criptoativo/saldo-especial",
    element: <SaldoEspecial />,
  },
  {
    path: "/contratos-activos",
    element: <ContractosActivos />,
  },
  {
    path: "/contratos-pendentes",
    element: <ContractosPendentes />,
  },
  {
    path: "/contratos-finalizados",
    element: <ContractosFinalizados />,
  },
  {
    path: "/pagamentos-recebidos",
    element: <PagamentosRecebidos />,
  },
  {
    path: "/pagamentos-pendentes",
    element: <PagamentosPendentes />,
  },
  {
    path: "/consultor",
    element: <Consultor />,
  },
  {
    path: "/plano-de-carreira",
    element: <PlanoDeCarreira />,
  },
  {
    path: "/mais/saldo",
    element: <Saldo />,
  },
  {
    path: "/mais/premiacoes-solicitadas",
    element: <PremiacoesSolicitadas />,
  },
  {
    path: "/mais/documentacao",
    element: <Documentacao />,
  },
  {
    path: "/mais/activacoes-de-terceiros",
    element: <ActivacoesDeTerceiros />,
  },
]);
function Routes() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Routes;
