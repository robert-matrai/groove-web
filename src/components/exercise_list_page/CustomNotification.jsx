import logo from "../../assets/logo.png";
import sound from "../../assets/sound.mp3"

export default function CustomNotification(params) {

  const audio = new Audio(sound);
  audio.play();
  const options = {
    icon: logo,
    body: params.body,
    tag: params.currentSet,
    requireInteraction: true,
    vibrate: [200, 100, 200],
  };
  new Notification(params.title, options);

}
