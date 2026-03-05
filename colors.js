function generateColor() {
    // Символы для HEX цвета
    let symbols = ["0",'1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    
    // Начало цвета
    let color = "#"
    
    
   for(let i = 0; i < 6 ; i++){
   let colorRandom = Math.floor(Math.random() * symbols.length) 
    color += symbols[colorRandom]
    console.log(color)


   }
    
    // Изменить фон
    document.body.style.backgroundColor = color
    
    // Показать код
    document.getElementById('colorCode').textContent = color
}