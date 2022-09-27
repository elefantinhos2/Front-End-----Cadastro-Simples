function ListEmpty() {
    return (
        <div className="lista">
        <nav>
        <h3>Resumo Financeiro</h3>
            <button className="Todos">Todos</button>
            <button className="Entrada">Entradas</button>
            <button className="Despesas">Despesas</button>
        </nav>
        <ul>
            <h2>Lista Vazia</h2>
        </ul>
    </div>
    );
}

export default ListEmpty;