import mediaStore from '../MediaStore/mediaStore';
import firebase from "firebase";
import { useState } from 'react';


export default function getMedia(mediaLocation) {

    // const [topass, setURL] = useState('')

    var defaultString = '.root/in-app-media/';
    // console.log(defaultString + mediaLocation);
    var url = firebase.storage()
        .ref(defaultString + mediaLocation)
        .getDownloadURL()
        .then(url => {
            // setURL(url)
            mediaStore.dispatch({
                type: 'addMedia',
                metadata: {
                    name: mediaLocation,
                    url
                }
            })
            return url
        })
        .catch(function (error) {
            // Handle any errors
        });




}