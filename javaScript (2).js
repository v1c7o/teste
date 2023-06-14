function adicionaDog(){
    var addc = document.getElementById("re-edit").value;

    var cl = document.getElementById("adic_list");
    var cli = document.createElement("li");
    cl.appendChild(cli);
    cli.innerHTML = addc;

  /*  document.getElementById("re-edit").value = "";*/
}
function remove1() {
    var remuv = document.getElementById("re-edit").value;

    var cl = document.getElementById("adic_list");
    var cli = cl.getElementsByTagName("li");
    cl.removeChild(cli[remuv -1]);
}

function adiciona2(){
    var addc = document.getElementById("re-dit").value;

    var cl = document.getElementById("adi_list");
    var cli = document.createElement("li");
    cl.appendChild(cli);
    cli.innerHTML = addc;
}
function adiciona3(){
    var addc = document.getElementById("ri-dit").value;

    var cl = document.getElementById("ad_list");
    var cli = document.createElement("li");
    cl.appendChild(cli);
    cli.innerHTML = addc;
}
