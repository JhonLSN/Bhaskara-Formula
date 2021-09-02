function resultado() {
    // Declarando variáveis 
    var a = Number(document.querySelector('input.main__input__a').value)
    var b = Number(document.querySelector('input.main__input__b').value)
    var c = Number(document.querySelector('input.main__input__c').value)
    var RDelta = document.querySelector('p.main__result__value-delta__delta')
    var Raiz1 = document.querySelector('p.main__value-x1__raiz1')
    var Raiz2 = document.querySelector('p.main__value-x2__raiz2')

    // Executando a Fórmula de Bhaskara
    var delta = (b*b)-4*a*c
    var RaizDeDelta = Math.sqrt(delta)
    var RaizX1 = (-b+RaizDeDelta)/(2*a) 
    var RaizX2 = (-b-RaizDeDelta)/(2*a)

    // Imprimindo Delta e as Raizes (x1, x2)
    RDelta.innerHTML = `${delta.toFixed(2)}`
    Raiz1.innerHTML = `${RaizX1.toFixed(2)}`
    Raiz2.innerHTML = `${RaizX2.toFixed(2)}`
    
}
