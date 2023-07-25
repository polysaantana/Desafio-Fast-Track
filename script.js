function openTab(evt, tabName) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    
    tabLinks = document.getElementsByTagName("a");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function pesquisarProdutos() {
   
    var termoPesquisa = document.getElementById("searchInput").value.toLowerCase();
  
    var produtos = document.getElementsByClassName("tab-content")[0].getElementsByTagName("div");
  
    for (var i = 0; i < produtos.length; i++) {
      var nomeProduto = produtos[i].getElementsByClassName("info")[0].getElementsByTagName("h4")[0].innerText.toLowerCase();
      if (nomeProduto.includes(termoPesquisa)) {
        produtos[i].style.display = ""; 
      } else {
        produtos[i].style.display = "none"; 
      }
    }
  }