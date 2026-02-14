const products = [
    {
        id:1,
        name:"Floral Summer Shirt",
        src:"assets/img/f1.jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },

    {
        id:2,
        name:"Summer Green",
        src:"assets/img/f2.jpg",
        desc:"",
        price:260,
        tags:["new","green","beach"]
    },

    {
        id:3,
        name:"Party Floral Shirt",
        src:"assets/img/f3.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },

    {
        id:4,
        name:"Floral summer shirt",
        src:"assets/img/f4.jpg",
        desc:"",
        price:399,
        tags:["old","white","beach"]
    },
    {
        id:5,
        name:"Beach Shirt",
        src:"assets/img/f5.jpg",
        desc:"",
        price:579,
        tags:["old","white","beach"]
    }
,
    {
        id:6,
        name:"Shirt Party Red",
        src:"assets/img/f6.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },

    {
        id:7,
        name:"Party Floral Shirt",
        src:"assets/img/f7.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },
    {
        id:8,
        name:"Shirt Party Red",
        src:"assets/img/f8.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },
    {
        id:9,
        name:"Floral Summer Shirt",
        src:"assets/img/f9.jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },
]
    var offerBar = document.querySelector(".offer-bar")

    document.getElementById("offer-close").addEventListener("click",
    
    function(){
        offerBar.style.display="none"
    }
    )
    
    var sideNavMenu=document.querySelector(".navbar-menu-toggle")
    var sidenavbar = document.querySelector(".side-navbar")
    sideNavMenu.addEventListener("click",function(){
       
        sidenavbar.style.marginLeft="0px"
    })
    
    document.getElementById("side-navbar-close").addEventListener("click",()=>{
        document.querySelector(".side-navbar").style.marginLeft = "-60%"
    })
    
    var container=document.querySelector(".products")
    products.forEach((product)=>{
        var createItem = document.createElement("div")
        createItem.classList.add("product")
        createItem.innerHTML=` <img style="width: 20vw;" src="${product.src}">
        <h1>${product.name}</h1>
        <p>₹${product.price}</p>
        <tags style="visibility:hidden;">${product.tags}</tags>`
    
        container.append(createItem)
    })
    
    var filterList =[]
    var tags = document.getElementsByName("tags")
    console.log(tags)
    
    tags.forEach((tag)=>{
        tag.addEventListener("change",(e)=>{
    
            if(e.target.checked)
            {
            filterList.push(e.target.value)
            console.log(filterList)
            update()
            
            }
            else{
                filterList = filterList.filter(item => item !== e.target.value);
                update()
    
            }
        })
    })
    
    var searchInput = document.getElementById("searchInput")
    searchInput.addEventListener("keyup",function(){
        update()
        
    })
    
    function update()
    {
        var productList = document.querySelectorAll(".product")
        for(var i=0;i<productList.length;i++){
            var check = false
            var product=productList[i]
            console.log(product)
            var temp=product.querySelector("tags").innerHTML
           
            console.log("element"+temp)
            
            const tempFilterArray = temp.split(',');
            
            console.log("tempfilterarray"+tempFilterArray)
            console.log("filterlist"+filterList)
           
                filterList.forEach((j)=>{
                    tempFilterArray.forEach((i)=>{
                    if(j==i)
                    {
                        check=true
                    }
                })
            })
    
            if(!check && filterList.length>0)
            {
                product.style.display="none"
            }
            else{
                product.style.display="block"
            } 
        };
    }
