import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function showMessage() {
  iziToast.show({
    close: false,
    closeOnClick: true,
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: 'white',
    timeout: 3000,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topRight',
    backgroundColor: 'red',
    progressBar: false,
  });
}
