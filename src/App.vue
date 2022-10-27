<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <RouterView />
  
  <!-- Bannière -->
  
  <div class="ban">
    <div class="ban_img">
      <img src="./assets/background.svg" alt="background">    
    </div>
    <div class="ban_text">
      <h1 class="">Construire<br> une expérience web.</h1>
    </div>
  </div>

  <!-- /Bannière -->

  <!-- Projets -->
  <div class="projets" id="projets">
    <div class="projets_title">
      <h2>Mes Projets</h2>
    </div>

    <div class="projets_container">

    
      <div class="projets_container_card">
        <a href="">
          <div class="projets_container_card_title">
            <h3>Groupomania</h3>
          </div>
          
          <div class="projets_container_card_img">
            <img src="./assets/img_projets/groupomania.jpg" alt="">
          </div>
        </a>
      </div>

      <div class="projets_container_card">
        
        <div class="projets_container_card_title">
          <h3>Kanap</h3>
        </div>
        
        <div class="projets_container_card_img">
          <img src="./assets/img_projets/kanap.jpg" alt="">
        </div>
        
      </div>

      <div class="projets_container_card">
        
        <div class="projets_container_card_title">
          <h3>La Chouette Agence</h3>
        </div>
        
        <div class="projets_container_card_img">
          <img src="./assets/img_projets/lachouetteagence.jpg" alt="">
        </div>
        
      </div>

      <div class="projets_container_card">
        
        <div class="projets_container_card_title">
          <h3>Oh My food</h3>
        </div>
        
        <div class="projets_container_card_img">
          <img src="./assets/img_projets/ohmyfood.jpg" alt="">
        </div>
        
      </div>
    
    </div>

  </div>
  
  <!-- /Projets -->
  
  <!-- Recommandations -->

  <div class="rec">
    <div class="rec_title">
      <h2>Recommandations !</h2>
    </div>

    <div class="rec_container">
      
      <div class="rec_container_card">
        <div class="rec_container_card_img">
          <img src="./assets/stephane.JPG" alt="">
        </div>
        <div class="rec_container_card_title">
          <h3>Stephane Nguetseng</h3>
        </div>
        <div class="rec_container_card_text">
          <p>
            Alexandre est curieux, passionné et compétent,
            il ne fait aucun doute qu'il a des compétences dans le domaine 
            du développement web.
          </p>
        </div>
      </div>

      <div class="rec_container_card">
        <div class="rec_container_card_img">
          <img src="./assets/patrice.JPG" alt="">
        </div>
        <div class="rec_container_card_title">
          <h3>Patrice Radeon</h3>
        </div>
        <div class="rec_container_card_text">
          <p>
            J'ai eu le plaisir d'accompagner Alexandre dans sa reconversion professionnelle 
            et sa recherche d'alternance. 
            Il a fait preuve durant nos sessions de rigueur et de détermination dans la 
            préparation de son projet et de ses candidatures. 
            Motivé, curieux et doté de qualités relationnelles, je suis convaincu 
            qu'Alexandre mettra toute son énergie et ses compétences au service des 
            projets et du collectif de votre entreprise. Alors n'hésitez plus, 
            contactez Alexandre pour un premier échange !
          </p>
        </div>
      </div>

      <div class="rec_container_card">
        <div class="rec_container_card_img">
          <img src="./assets/coralie.JPG" alt="">
        </div>
        <div class="rec_container_card_title">
          <h3>Coralie Boulay</h3>
        </div>
        <div class="rec_container_card_text">
          <p>
            J'ai eu le plaisir de rencontrer Alexandre à l'un de nos Job Dating. J'ai pu apprécier sa personnalité posée, 
            structurée et quand nous avons échangé sur son métier et le type d'entreprise 
            dans lequel il se projette, j'ai pu le voir s'animer et j'ai vu beaucoup de 
            passion dans son regard. A travers nos échanges réguliers, en plus d'être 
            quelqu'un de réactif et de très poli, il a démontré une grande capacité à se mobiliser 
            pour délivrer le travail attendu dans des délais très courts. Je recommande vraiment 
            Alexandre si un recruteur vient à me lire sur son profil. Qu'il n'hésite pas à me contacter !
          </p>
        </div>
      </div>

    </div>

  </div>
  
  <!-- /Recommandations -->

  <!-- Contact -->
  <div class="contact" id="contact">
    
    <div class="contact_card_title">
      <h2>Contactez moi !</h2>
    </div>
    
    <div class="contact_card">
      
      
      <div class="contact_card_img">
        <img src="./assets/CLEMENCOT Alexandre - clemencot.alexandre@gmail.com_M2P0236.jpg" alt="Photo Alexandre">
      </div>
        
      <div class="contact_card_text">
        <h3>Clémençot Alexandre</h3>
        <p>
          93350 Le Bourget <br>
          Permis B<br>
          <fa icon="phone" /> 06 76 08 34 91
        </p>
        <div class="contact_card_text_mail">
          <a href="mailto:clemencot.alexandre@gmail.com"><fa icon="envelope" />clemencot.alexandre@gmail.com</a>
        </div>
      </div>

    </div>
  </div>

  <!-- /Contact -->


</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  list-style-type: none;
  font-family: 'Poppins', sans-serif;
  color: #fff;
}

body{
  background-color: rgb(3, 32, 46);
}

// Banière

.ban{
  color: white;
  &_img{
    width: 100%;
    & img{
      opacity: .2;
    }
  }
  &_text{
    position:absolute;
    top: 400px;
    left: 100px;
    font-size: 2.5rem;
  }
}

@media all and (min-width: 800px) and (max-width: 1100px){
  .ban{
    &_text{
      font-size: 1.3rem;
      top: 330px;
    }
  }
  
}

@media all and (min-width: 300px) and (max-width: 800px){
  .ban{
    &_text{
      font-size: 1rem;
      top: 330px;
    }
  }
  
}

// -- / Bannières

// Projets

.projets{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 0px;
  &_title{
    font-size: 2.5rem;
    margin-bottom: 40px;
    & h2 {
    }
  }
  
  &_container{
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    &_card{
      width: 100%;
      margin: 10px auto;
      &_title{
        font-size: 1.8rem;
        margin-bottom: 10px;
        & h3 {
        }
      }      
      &_img{

        & img{
          width: 70%;
          height: 400px;
        }

      }

    }

  }

}

// /-- Projets

// Recommandations

.rec {
  margin: auto 100px;
  &_title{
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  &_container{
    display: flex;
    justify-content: center;
    &_card{
      width: 500px;
      background-color: teal;
      border-radius: 17px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      margin: 20px;
      padding: 10px 0;
      &_title{
        background-color: #fff;
        border-radius: 12px;
        padding: 5px;
        & h3{
          color: black;
        }
      }
      &_img{
        & img{
          border-radius: 50%;
        }
      }
      &_text{
        margin: 20px;
      }
    }
  }
}

// /-- Recommandations

// Contact

.contact{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
  &_card{
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: teal;
    border: 2px solid rgb(224, 149, 9);
    padding: 15px;
    &_title{
      font-size: 1.8rem;
      margin-bottom: 20px;
    }
    &_img{ 
      margin: 10px 0;
      & img{
        width: 400px;
        height: 400px;
        border-radius: 50%;
      }
    }
    &_text{
      margin: 20px;
      font-size: 1.5rem;
      &_mail{
        padding: 5px;
        & a{
          width: 50px;
          height: 50px;
          & svg{
            margin-right: 10px;
          }
        }
      }
    }
  }
}

// /-- Contact

</style>
