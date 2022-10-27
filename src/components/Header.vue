<template>
    <header class="header">
        <div class="header_title">
            <h1>Alexandre Clémençot</h1>
        </div>
        <nav class="header_link">
            <button id="home" href="">Accueil</button>
            <button href="#projets">Projets</button>
            <button href="#contact">Contact</button>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    
}
</script>

<style lang="scss">
.header{
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-bottom: 100px;
    &_title{
        margin-left: 100px;
    }
    &_link{
        margin-right: 100px;
        & button{
            text-decoration: none;
            color: rgb(0, 138, 230);
            margin: 25px;
            width: 100px;
            height: 35px;
            background: none;            
            border-radius: 4px;
            border: none;
            font-size: 1.2rem;
            transform: scale(1);
            transition-property: transform;
            transition-duration: 1000ms;
            &:hover {
                // animation: border 3s ease-in-out;
                transform: scale(1.15);
            }
        }
    }
    &_burger{
        display: none;
    }
}

#home{
    width: 60px;
}

@keyframes border {
    0%{
        transform: rotateY('angle');
    }
}

@media all and (min-width: 800px) and (max-width: 1100px){
    .header{
        &_title{
            font-size: .8rem;
            margin-left: 40px;
        }
        &_link{
            margin-right: 10px;
        }
    }
}

@media all and (min-width: 600px) and (max-width: 800px){
    .header{
        &_title{
            font-size: .5rem;
            margin-left: 40px;
        }
        &_link{
            margin-right: 10px;
            & button {
                width: 80px;
                height: 30px;
                font-size: .8rem;
                margin: 10px;
            }
        }
    }
}

@media all and (min-width: 300px) and (max-width: 600px){
    .header{
        &_title{
            font-size: .4rem;
            margin-left: 25px;
        }
        &_link{
            display: flex;
            margin-right: 5px;
            & button{
                width: 60px;
                height: 25px;
                font-size: .6rem;
                margin: 5px;
            }
        }
    }
}
</style>