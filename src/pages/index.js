import '../App.css';
import React, { useState } from 'react';

function Index() {
// VARIABLE POUR AFFICHER LES MESSAGES DE SUCCES ET D'ERREUR
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
// RECUPERATION DES DONNEES DU FORMULAIRE
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');

  // GESTION DES DONNEES DU FORMULAIRE
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleImageChange = (e) => {
    //setImage(e.target.value);
    setImage(e.target.files[0]); // Récupère l'image sélectionnée
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async(e) => {
    handleFirstNameChange(e);
    e.preventDefault();
    console.log('Données du formulaire envoyées..');
    console.log('FirstName:', firstName);
    console.log('LastName:', lastName);
    console.log('Email:', email);
    console.log('Age:', age);
    console.log('Image:', image);
    console.log('Password:', password);
    // SOUMISSION DU FORMULAIRE AU SERVEUR L'API
    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        age: age,
        password: password,
        image_url:image,
      };
            
      try {
        const response = await fetch('http://localhost:8000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            //'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(formData) // Convertit les données en JSON pour l'API
        });
  
        const result = await response.json();
        console.log('Réponse du serveur:', result);
  
        if (response.ok) {
            setSuccessMessage('Inscription réussie!');
          /*
          setErrorMessage('');*/
          console.log('User enregistré avec succès..');
        } else {
          /*setErrorMessage(result.message || 'Erreur lors de l\'inscription');
          setSuccessMessage('');*/
        }
      } catch (error) {
        //setErrorMessage('Erreur de réseau ou serveur');
        //setSuccessMessage('');
      }
  };

  return (
    <div className="App">
      <header className="App-Register">
        <div className="p-5">
            <h4>
            Bienvenue à Neuronnes Technologies.
            </h4>
          <span className='Text-Welcome'>
              Neuronnes Technologies est une entreprise spécialisée dans la
            création d'applications web et mobiles innovantes.
          </span>
          <div style={{ paddingTop: '20px' }}>
            Veuillez vous inscrire avec vos informations personnelles.
          </div>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <form id="registerForm" onSubmit={handleSubmit}>
            <div style={{ marginTop: '20px' }}>
              <input
                type="text"
                placeholder="Prénom" name="last_name" onChange={handleLastNameChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nom" name="first_name" onChange={handleFirstNameChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email" name="email" onChange={handleEmailChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Âge" name="age" onChange={handleAgeChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
            </div>
            <div style={{ marginTop: '5px', marginBottom: '10px', backgroundColor:'white'}}>
              <input
                type="file"
                accept="image/*"
                placeholder="Image de profil" 
                name="image_url"  onChange={handleImageChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Mot de passe" name="password" onChange={handlePasswordChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
            </div>
            <button className='btn-register'type="submit">
              S'inscrire
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Index;
