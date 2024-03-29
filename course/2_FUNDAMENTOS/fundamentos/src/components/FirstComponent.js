// Reaproveitando outros componentes em componentes
import MyComponent from "./MyComponent";

// Meu primeiro componente
const FirstComponent = () => {
  return (
    <div>
      {/* Comentários em JSX são feitos assim, também dentro da tag pai. */}
      <h1>Meu primeiro componente</h1>
      <MyComponent />
    </div>
  )
};

// Exportação do componente para utilizar fora do código
export default FirstComponent;