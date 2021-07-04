import '../styles/index.scss';
import { testAlert } from './print';

function main() {
  testAlert('Test!')
}

document.addEventListener('DOMContentLoaded', function() {
  main();
});