<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style> -->
<template>
    <body>
  
        <div class="sidenav">
            <h2 class="daftarMenu">Daftar Menu</h2>
            <router-link class="router-link" to="/MakananView">Makanan</router-link>
            <router-link class="router-link" to="/MinumanView">Minuman</router-link>
            <router-link class="router-link" to="/MakananView">Snack</router-link>
            <div class="tengah">
                <div class="checkout">
                    <button>Checkout</button>
                </div>
            </div>
        </div>
        
        <div class="main">
            <h1>Selamat Datang di Aplikasi McDonald, <br> Silahkan Pesan Makanan Anda</h1>
        </div>
    </body>
    <router-view/>
  </template>
  <script>
  export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
  }
  </script>
  <style>
    body {
    font-family: "Lato", sans-serif;
    }
    .daftarMenu {
        color: #ffffff;
        padding-left: 32px;
    }
    .sidenav {
    height: 100%;
    width: 290px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(248,100,100);
    overflow-x: hidden;
    padding-top: 20px;
    }
  
    .sidenav .router-link {
    padding: 6px 6px 13px 32px;
    text-decoration: none;
    font-size: 20px;
    color: #ffffff;
    display: block;
    }
  
    .sidenav .router-link:hover {
    color: #f1f1f1;
    }
  
    .main {
    margin: 23% 20% 200px 520px ; /* Same as the width of the sidenav */
    text-align: center;
    
    }
    .tengah{
        display: flex;
        align-items: center;
        padding: 440px 50px 50px 40px;
    }
    .checkout button{
        background-color: rgb(240,236,92); /* Green */
        border: none;
        color: black;
        padding: 15px 60px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
        font-weight: bolder;
        margin: 3px 3px;
        cursor: pointer;
        border-radius: 5px;
  
    }
  
    @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav .router-link {font-size: 18px;}
    }
  </style>