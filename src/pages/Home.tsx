import {IonButton, IonContent} from '@ionic/react';
import './App.css';
import {NavLink} from 'react-router-dom';
// import { useEffect, useState } from 'react';
// //REDUX
// import { useSelector, useDispatch } from 'react-redux'


const Home: React.FC = () => {
    return (
        <IonContent className="startPage" fullscreen>
            <NavLink to="trainer">
                <IonButton className='button'>START</IonButton>
            </NavLink>
        </IonContent>
    );
};

export default Home;
