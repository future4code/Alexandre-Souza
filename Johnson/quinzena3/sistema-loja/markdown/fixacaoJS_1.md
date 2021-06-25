```

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

    const salario = 2000
    const precoDoCarro = valorTotalVendas / qtdeCarrosVendidos
    const comissao = qtdeCarrosVendidos * (100 + precoDoCarro * 0.05)
    const salarioComComissao = salario + comissao

    if (qtdeCarrosVendidos !== 0) {
        return salarioComComissao
    } else {
        return salario
    }

}

```

