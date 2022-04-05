import {Component} from 'react'
import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Game1 from '../Game1'

import CardArrange from '../MemCardArrange'
import CardArrange2 from '../MemCardArrange2'
import CardArrange3 from '../MemCardArrange3'
import CardArrange4 from '../MemCardArrange4'
import CardArrange5 from '../MemCardArrange5'
import CardArrange6 from '../MemCardArrange6'
import CardArrange7 from '../MemCardArrange7'
import CardArrange8 from '../MemCardArrange8'
import CardArrange9 from '../MemCardArrange9'
import CardArrange10 from '../MemCardArrange10'
import CardArrange11 from '../MemCardArrange11'
import CardArrange12 from '../MemCardArrange12'

import './index.css'

const a1 = [1, 5, 9]

const a2 = [1, 6, 11, 16]

const l1 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
]

const l2 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
]

const l3 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
]

const l4 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
  {id: 26, name: 'b26'},
  {id: 27, name: 'b27'},
  {id: 28, name: 'b28'},
  {id: 29, name: 'b29'},
  {id: 30, name: 'b30'},
  {id: 31, name: 'b31'},
  {id: 32, name: 'b32'},
  {id: 33, name: 'b33'},
  {id: 34, name: 'b34'},
  {id: 35, name: 'b35'},
  {id: 36, name: 'b36'},
]

const l5 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
  {id: 26, name: 'b26'},
  {id: 27, name: 'b27'},
  {id: 28, name: 'b28'},
  {id: 29, name: 'b29'},
  {id: 30, name: 'b30'},
  {id: 31, name: 'b31'},
  {id: 32, name: 'b32'},
  {id: 33, name: 'b33'},
  {id: 34, name: 'b34'},
  {id: 35, name: 'b35'},
  {id: 36, name: 'b36'},
  {id: 37, name: '37'},
  {id: 38, name: '38'},
  {id: 39, name: '39'},
  {id: 40, name: '40'},
  {id: 41, name: '41'},
  {id: 42, name: '42'},
  {id: 43, name: '43'},
  {id: 44, name: '44'},
  {id: 45, name: '45'},
  {id: 46, name: '46'},
  {id: 47, name: 'b47'},
  {id: 48, name: 'b48'},
  {id: 49, name: 'b49'},
]

const l6 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
  {id: 26, name: 'b26'},
  {id: 27, name: 'b27'},
  {id: 28, name: 'b28'},
  {id: 29, name: 'b29'},
  {id: 30, name: 'b30'},
  {id: 31, name: 'b31'},
  {id: 32, name: 'b32'},
  {id: 33, name: 'b33'},
  {id: 34, name: 'b34'},
  {id: 35, name: 'b35'},
  {id: 36, name: 'b36'},
  {id: 37, name: '37'},
  {id: 38, name: '38'},
  {id: 39, name: '39'},
  {id: 40, name: '40'},
  {id: 41, name: '41'},
  {id: 42, name: '42'},
  {id: 43, name: '43'},
  {id: 44, name: '44'},
  {id: 45, name: '45'},
  {id: 46, name: '46'},
  {id: 47, name: 'b47'},
  {id: 48, name: 'b48'},
  {id: 49, name: 'b49'},
  {id: 50, name: 'b50'},
  {id: 51, name: 'b51'},
  {id: 52, name: 'b52'},
  {id: 53, name: 'b53'},
  {id: 54, name: 'b54'},
  {id: 55, name: 'b55'},
  {id: 56, name: 'b56'},
  {id: 57, name: 'b57'},
  {id: 58, name: '58'},
  {id: 59, name: '59'},
  {id: 60, name: '60'},
  {id: 61, name: '61'},
  {id: 62, name: '62'},
  {id: 63, name: '63'},
  {id: 64, name: '64'},
]

const l7 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
  {id: 26, name: 'b26'},
  {id: 27, name: 'b27'},
  {id: 28, name: 'b28'},
  {id: 29, name: 'b29'},
  {id: 30, name: 'b30'},
  {id: 31, name: 'b31'},
  {id: 32, name: 'b32'},
  {id: 33, name: 'b33'},
  {id: 34, name: 'b34'},
  {id: 35, name: 'b35'},
  {id: 36, name: 'b36'},
  {id: 37, name: '37'},
  {id: 38, name: '38'},
  {id: 39, name: '39'},
  {id: 40, name: '40'},
  {id: 41, name: '41'},
  {id: 42, name: '42'},
  {id: 43, name: '43'},
  {id: 44, name: '44'},
  {id: 45, name: '45'},
  {id: 46, name: '46'},
  {id: 47, name: 'b47'},
  {id: 48, name: 'b48'},
  {id: 49, name: 'b49'},
  {id: 50, name: 'b50'},
  {id: 51, name: 'b51'},
  {id: 52, name: 'b52'},
  {id: 53, name: 'b53'},
  {id: 54, name: 'b54'},
  {id: 55, name: 'b55'},
  {id: 56, name: 'b56'},
  {id: 57, name: 'b57'},
  {id: 58, name: '58'},
  {id: 59, name: '59'},
  {id: 60, name: '60'},
  {id: 61, name: '61'},
  {id: 62, name: '62'},
  {id: 63, name: '63'},
  {id: 64, name: '64'},
  {id: 65, name: '65'},
  {id: 66, name: '66'},
  {id: 67, name: '67'},
  {id: 68, name: '68'},
  {id: 69, name: '69'},
  {id: 70, name: '70'},
  {id: 71, name: '72'},
  {id: 73, name: 'b73'},
  {id: 74, name: 'b74'},
  {id: 75, name: 'b75'},
  {id: 76, name: 'b76'},
  {id: 77, name: 'b77'},
  {id: 78, name: 'b78'},
  {id: 79, name: 'b79'},
  {id: 80, name: '80'},
  {id: 81, name: '81'},
]

const l8 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
  {id: 26, name: 'b26'},
  {id: 27, name: 'b27'},
  {id: 28, name: 'b28'},
  {id: 29, name: 'b29'},
  {id: 30, name: 'b30'},
  {id: 31, name: 'b31'},
  {id: 32, name: 'b32'},
  {id: 33, name: 'b33'},
  {id: 34, name: 'b34'},
  {id: 35, name: 'b35'},
  {id: 36, name: 'b36'},
  {id: 37, name: '37'},
  {id: 38, name: '38'},
  {id: 39, name: '39'},
  {id: 40, name: '40'},
  {id: 41, name: '41'},
  {id: 42, name: '42'},
  {id: 43, name: '43'},
  {id: 44, name: '44'},
  {id: 45, name: '45'},
  {id: 46, name: '46'},
  {id: 47, name: 'b47'},
  {id: 48, name: 'b48'},
  {id: 49, name: 'b49'},
  {id: 50, name: 'b50'},
  {id: 51, name: 'b51'},
  {id: 52, name: 'b52'},
  {id: 53, name: 'b53'},
  {id: 54, name: 'b54'},
  {id: 55, name: 'b55'},
  {id: 56, name: 'b56'},
  {id: 57, name: 'b57'},
  {id: 58, name: '58'},
  {id: 59, name: '59'},
  {id: 60, name: '60'},
  {id: 61, name: '61'},
  {id: 62, name: '62'},
  {id: 63, name: '63'},
  {id: 64, name: '64'},
  {id: 65, name: '65'},
  {id: 66, name: '66'},
  {id: 67, name: '67'},
  {id: 68, name: '68'},
  {id: 69, name: '69'},
  {id: 70, name: '70'},
  {id: 71, name: '72'},
  {id: 73, name: 'b73'},
  {id: 74, name: 'b74'},
  {id: 75, name: 'b75'},
  {id: 76, name: 'b76'},
  {id: 77, name: 'b77'},
  {id: 78, name: 'b78'},
  {id: 79, name: 'b79'},
  {id: 80, name: '80'},
  {id: 81, name: '81'},
  {id: 82, name: 'b82'},
  {id: 83, name: 'b83'},
  {id: 84, name: '84'},
  {id: 85, name: '85'},
  {id: 86, name: '86'},
  {id: 87, name: '87'},
  {id: 88, name: '88'},
  {id: 89, name: '89'},
  {id: 90, name: '90'},
  {id: 91, name: '91'},
  {id: 92, name: '92'},
  {id: 93, name: '93'},
  {id: 94, name: '94'},
  {id: 95, name: '95'},
  {id: 96, name: '96'},
  {id: 97, name: '97'},
  {id: 98, name: '98'},
  {id: 99, name: '99'},
  {id: 100, name: '100'},
]

const l9 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
  {id: 26, name: 'b26'},
  {id: 27, name: 'b27'},
  {id: 28, name: 'b28'},
  {id: 29, name: 'b29'},
  {id: 30, name: 'b30'},
  {id: 31, name: 'b31'},
  {id: 32, name: 'b32'},
  {id: 33, name: 'b33'},
  {id: 34, name: 'b34'},
  {id: 35, name: 'b35'},
  {id: 36, name: 'b36'},
  {id: 37, name: '37'},
  {id: 38, name: '38'},
  {id: 39, name: '39'},
  {id: 40, name: '40'},
  {id: 41, name: '41'},
  {id: 42, name: '42'},
  {id: 43, name: '43'},
  {id: 44, name: '44'},
  {id: 45, name: '45'},
  {id: 46, name: '46'},
  {id: 47, name: 'b47'},
  {id: 48, name: 'b48'},
  {id: 49, name: 'b49'},
  {id: 50, name: 'b50'},
  {id: 51, name: 'b51'},
  {id: 52, name: 'b52'},
  {id: 53, name: 'b53'},
  {id: 54, name: 'b54'},
  {id: 55, name: 'b55'},
  {id: 56, name: 'b56'},
  {id: 57, name: 'b57'},
  {id: 58, name: '58'},
  {id: 59, name: '59'},
  {id: 60, name: '60'},
  {id: 61, name: '61'},
  {id: 62, name: '62'},
  {id: 63, name: '63'},
  {id: 64, name: '64'},
  {id: 65, name: '65'},
  {id: 66, name: '66'},
  {id: 67, name: '67'},
  {id: 68, name: '68'},
  {id: 69, name: '69'},
  {id: 70, name: '70'},
  {id: 71, name: '72'},
  {id: 73, name: 'b73'},
  {id: 74, name: 'b74'},
  {id: 75, name: 'b75'},
  {id: 76, name: 'b76'},
  {id: 77, name: 'b77'},
  {id: 78, name: 'b78'},
  {id: 79, name: 'b79'},
  {id: 80, name: '80'},
  {id: 81, name: '81'},
  {id: 82, name: 'b82'},
  {id: 83, name: 'b83'},
  {id: 84, name: '84'},
  {id: 85, name: '85'},
  {id: 86, name: '86'},
  {id: 87, name: '87'},
  {id: 88, name: '88'},
  {id: 89, name: '89'},
  {id: 90, name: '90'},
  {id: 91, name: '91'},
  {id: 92, name: '92'},
  {id: 93, name: '93'},
  {id: 94, name: '94'},
  {id: 95, name: '95'},
  {id: 96, name: '96'},
  {id: 97, name: '97'},
  {id: 98, name: '98'},
  {id: 99, name: '99'},
  {id: 100, name: '100'},
  {id: 101, name: '101'},
  {id: 102, name: '102'},
  {id: 103, name: '103'},
  {id: 104, name: '104'},
  {id: 105, name: '105'},
  {id: 106, name: '106'},
  {id: 107, name: '107'},
  {id: 108, name: '108'},
  {id: 109, name: '109'},
  {id: 110, name: '110'},
  {id: 111, name: '111'},
  {id: 112, name: '112'},
  {id: 113, name: '113'},
  {id: 114, name: '114'},
  {id: 115, name: '115'},
  {id: 116, name: '116'},
  {id: 117, name: '117'},
  {id: 118, name: '118'},
  {id: 119, name: '119'},
  {id: 120, name: '120'},
  {id: 121, name: '121'},
]

const l10 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
  {id: 26, name: 'b26'},
  {id: 27, name: 'b27'},
  {id: 28, name: 'b28'},
  {id: 29, name: 'b29'},
  {id: 30, name: 'b30'},
  {id: 31, name: 'b31'},
  {id: 32, name: 'b32'},
  {id: 33, name: 'b33'},
  {id: 34, name: 'b34'},
  {id: 35, name: 'b35'},
  {id: 36, name: 'b36'},
  {id: 37, name: '37'},
  {id: 38, name: '38'},
  {id: 39, name: '39'},
  {id: 40, name: '40'},
  {id: 41, name: '41'},
  {id: 42, name: '42'},
  {id: 43, name: '43'},
  {id: 44, name: '44'},
  {id: 45, name: '45'},
  {id: 46, name: '46'},
  {id: 47, name: 'b47'},
  {id: 48, name: 'b48'},
  {id: 49, name: 'b49'},
  {id: 50, name: 'b50'},
  {id: 51, name: 'b51'},
  {id: 52, name: 'b52'},
  {id: 53, name: 'b53'},
  {id: 54, name: 'b54'},
  {id: 55, name: 'b55'},
  {id: 56, name: 'b56'},
  {id: 57, name: 'b57'},
  {id: 58, name: '58'},
  {id: 59, name: '59'},
  {id: 60, name: '60'},
  {id: 61, name: '61'},
  {id: 62, name: '62'},
  {id: 63, name: '63'},
  {id: 64, name: '64'},
  {id: 65, name: '65'},
  {id: 66, name: '66'},
  {id: 67, name: '67'},
  {id: 68, name: '68'},
  {id: 69, name: '69'},
  {id: 70, name: '70'},
  {id: 71, name: '72'},
  {id: 73, name: 'b73'},
  {id: 74, name: 'b74'},
  {id: 75, name: 'b75'},
  {id: 76, name: 'b76'},
  {id: 77, name: 'b77'},
  {id: 78, name: 'b78'},
  {id: 79, name: 'b79'},
  {id: 80, name: '80'},
  {id: 81, name: '81'},
  {id: 82, name: 'b82'},
  {id: 83, name: 'b83'},
  {id: 84, name: '84'},
  {id: 85, name: '85'},
  {id: 86, name: '86'},
  {id: 87, name: '87'},
  {id: 88, name: '88'},
  {id: 89, name: '89'},
  {id: 90, name: '90'},
  {id: 91, name: '91'},
  {id: 92, name: '92'},
  {id: 93, name: '93'},
  {id: 94, name: '94'},
  {id: 95, name: '95'},
  {id: 96, name: '96'},
  {id: 97, name: '97'},
  {id: 98, name: '98'},
  {id: 99, name: '99'},
  {id: 100, name: '100'},
  {id: 101, name: '101'},
  {id: 102, name: '102'},
  {id: 103, name: '103'},
  {id: 104, name: '104'},
  {id: 105, name: '105'},
  {id: 106, name: '106'},
  {id: 107, name: '107'},
  {id: 108, name: '108'},
  {id: 109, name: '109'},
  {id: 110, name: '110'},
  {id: 111, name: '111'},
  {id: 112, name: '112'},
  {id: 113, name: '113'},
  {id: 114, name: '114'},
  {id: 115, name: '115'},
  {id: 116, name: '116'},
  {id: 117, name: '117'},
  {id: 118, name: '118'},
  {id: 119, name: '119'},
  {id: 120, name: '120'},
  {id: 121, name: '121'},
  {id: 122, name: '122'},
  {id: 123, name: '123'},
  {id: 124, name: '124'},
  {id: 125, name: '125'},
  {id: 126, name: '126'},
  {id: 127, name: '127'},
  {id: 128, name: '128'},
  {id: 129, name: '129'},
  {id: 130, name: '130'},
  {id: 131, name: '131'},
  {id: 132, name: '132'},
  {id: 133, name: '133'},
  {id: 134, name: '134'},
  {id: 135, name: '135'},
  {id: 136, name: '136'},
  {id: 137, name: '137'},
  {id: 138, name: '138'},
  {id: 139, name: '139'},
  {id: 140, name: '140'},
  {id: 141, name: '141'},
  {id: 142, name: '142'},
  {id: 143, name: '143'},
  {id: 144, name: '144'},
  {id: 145, name: '145'},
  {id: 146, name: '146'},
  {id: 147, name: '147'},
  {id: 148, name: '148'},
  {id: 149, name: '149'},
  {id: 150, name: '150'},
  {id: 151, name: '151'},
  {id: 152, name: '152'},
  {id: 153, name: '153'},
  {id: 154, name: '154'},
  {id: 155, name: '155'},
  {id: 156, name: '156'},
  {id: 157, name: '157'},
  {id: 158, name: '158'},
  {id: 159, name: '159'},
  {id: 160, name: '160'},
  {id: 161, name: '161'},
  {id: 162, name: '162'},
  {id: 163, name: '163'},
  {id: 164, name: '164'},
  {id: 165, name: '165'},
  {id: 166, name: '166'},
  {id: 167, name: '167'},
  {id: 168, name: '168'},
  {id: 169, name: '169'},
]

const l11 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
  {id: 26, name: 'b26'},
  {id: 27, name: 'b27'},
  {id: 28, name: 'b28'},
  {id: 29, name: 'b29'},
  {id: 30, name: 'b30'},
  {id: 31, name: 'b31'},
  {id: 32, name: 'b32'},
  {id: 33, name: 'b33'},
  {id: 34, name: 'b34'},
  {id: 35, name: 'b35'},
  {id: 36, name: 'b36'},
  {id: 37, name: '37'},
  {id: 38, name: '38'},
  {id: 39, name: '39'},
  {id: 40, name: '40'},
  {id: 41, name: '41'},
  {id: 42, name: '42'},
  {id: 43, name: '43'},
  {id: 44, name: '44'},
  {id: 45, name: '45'},
  {id: 46, name: '46'},
  {id: 47, name: 'b47'},
  {id: 48, name: 'b48'},
  {id: 49, name: 'b49'},
  {id: 50, name: 'b50'},
  {id: 51, name: 'b51'},
  {id: 52, name: 'b52'},
  {id: 53, name: 'b53'},
  {id: 54, name: 'b54'},
  {id: 55, name: 'b55'},
  {id: 56, name: 'b56'},
  {id: 57, name: 'b57'},
  {id: 58, name: '58'},
  {id: 59, name: '59'},
  {id: 60, name: '60'},
  {id: 61, name: '61'},
  {id: 62, name: '62'},
  {id: 63, name: '63'},
  {id: 64, name: '64'},
  {id: 65, name: '65'},
  {id: 66, name: '66'},
  {id: 67, name: '67'},
  {id: 68, name: '68'},
  {id: 69, name: '69'},
  {id: 70, name: '70'},
  {id: 71, name: '71'},
  {id: 72, name: '72'},
  {id: 73, name: 'b73'},
  {id: 74, name: 'b74'},
  {id: 75, name: 'b75'},
  {id: 76, name: 'b76'},
  {id: 77, name: 'b77'},
  {id: 78, name: 'b78'},
  {id: 79, name: 'b79'},
  {id: 80, name: '80'},
  {id: 81, name: '81'},
  {id: 82, name: 'b82'},
  {id: 83, name: 'b83'},
  {id: 84, name: '84'},
  {id: 85, name: '85'},
  {id: 86, name: '86'},
  {id: 87, name: '87'},
  {id: 88, name: '88'},
  {id: 89, name: '89'},
  {id: 90, name: '90'},
  {id: 91, name: '91'},
  {id: 92, name: '92'},
  {id: 93, name: '93'},
  {id: 94, name: '94'},
  {id: 95, name: '95'},
  {id: 96, name: '96'},
  {id: 97, name: '97'},
  {id: 98, name: '98'},
  {id: 99, name: '99'},
  {id: 100, name: '100'},
  {id: 101, name: '101'},
  {id: 102, name: '102'},
  {id: 103, name: '103'},
  {id: 104, name: '104'},
  {id: 105, name: '105'},
  {id: 106, name: '106'},
  {id: 107, name: '107'},
  {id: 108, name: '108'},
  {id: 109, name: '109'},
  {id: 110, name: '110'},
  {id: 111, name: '111'},
  {id: 112, name: '112'},
  {id: 113, name: '113'},
  {id: 114, name: '114'},
  {id: 115, name: '115'},
  {id: 116, name: '116'},
  {id: 117, name: '117'},
  {id: 118, name: '118'},
  {id: 119, name: '119'},
  {id: 120, name: '120'},
  {id: 121, name: '121'},
  {id: 122, name: '122'},
  {id: 123, name: '123'},
  {id: 124, name: '124'},
  {id: 125, name: '125'},
  {id: 126, name: '126'},
  {id: 127, name: '127'},
  {id: 128, name: '128'},
  {id: 129, name: '129'},
  {id: 130, name: '130'},
  {id: 131, name: '131'},
  {id: 132, name: '132'},
  {id: 133, name: '133'},
  {id: 134, name: '134'},
  {id: 135, name: '135'},
  {id: 136, name: '136'},
  {id: 137, name: '137'},
  {id: 138, name: '138'},
  {id: 139, name: '139'},
  {id: 140, name: '140'},
  {id: 141, name: '141'},
  {id: 142, name: '142'},
  {id: 143, name: '143'},
  {id: 144, name: '144'},
  {id: 145, name: '145'},
  {id: 146, name: '146'},
  {id: 147, name: '147'},
  {id: 148, name: '148'},
  {id: 149, name: '149'},
  {id: 150, name: '150'},
  {id: 151, name: '151'},
  {id: 152, name: '152'},
  {id: 153, name: '153'},
  {id: 154, name: '154'},
  {id: 155, name: '155'},
  {id: 156, name: '156'},
  {id: 157, name: '157'},
  {id: 158, name: '158'},
  {id: 159, name: '159'},
  {id: 160, name: '160'},
  {id: 161, name: '161'},
  {id: 162, name: '162'},
  {id: 163, name: '163'},
  {id: 164, name: '164'},
  {id: 165, name: '165'},
  {id: 166, name: '166'},
  {id: 167, name: '167'},
  {id: 168, name: '168'},
  {id: 169, name: '169'},
  {id: 170, name: '170'},
  {id: 171, name: '171'},
  {id: 172, name: '172'},
  {id: 173, name: '173'},
  {id: 174, name: '174'},
  {id: 175, name: '175'},
  {id: 176, name: '176'},
  {id: 177, name: '177'},
  {id: 178, name: '178'},
  {id: 179, name: '179'},
  {id: 180, name: '180'},
  {id: 181, name: '181'},
  {id: 182, name: '182'},
  {id: 183, name: '183'},
  {id: 184, name: '184'},
  {id: 185, name: '185'},
  {id: 186, name: '186'},
  {id: 187, name: '187'},
  {id: 188, name: '188'},
  {id: 189, name: '189'},
  {id: 190, name: '190'},
  {id: 191, name: '191'},
  {id: 192, name: '192'},
  {id: 193, name: '193'},
  {id: 194, name: '194'},
  {id: 195, name: '195'},
  {id: 196, name: '196'},
]

const l12 = [
  {id: 1, name: 'b1'},
  {id: 2, name: 'b2'},
  {id: 3, name: 'b3'},
  {id: 4, name: 'b4'},
  {id: 5, name: 'b5'},
  {id: 6, name: 'b6'},
  {id: 7, name: 'b7'},
  {id: 8, name: 'b8'},
  {id: 9, name: 'b9'},
  {id: 10, name: 'b10'},
  {id: 11, name: 'b11'},
  {id: 12, name: 'b12'},
  {id: 13, name: 'b13'},
  {id: 14, name: 'b14'},
  {id: 15, name: 'b15'},
  {id: 16, name: 'b16'},
  {id: 17, name: 'b17'},
  {id: 18, name: 'b18'},
  {id: 19, name: 'b19'},
  {id: 20, name: '20'},
  {id: 21, name: '21'},
  {id: 22, name: '22'},
  {id: 23, name: 'b23'},
  {id: 24, name: 'b24'},
  {id: 25, name: 'b25'},
  {id: 26, name: 'b26'},
  {id: 27, name: 'b27'},
  {id: 28, name: 'b28'},
  {id: 29, name: 'b29'},
  {id: 30, name: 'b30'},
  {id: 31, name: 'b31'},
  {id: 32, name: 'b32'},
  {id: 33, name: 'b33'},
  {id: 34, name: 'b34'},
  {id: 35, name: 'b35'},
  {id: 36, name: 'b36'},
  {id: 37, name: '37'},
  {id: 38, name: '38'},
  {id: 39, name: '39'},
  {id: 40, name: '40'},
  {id: 41, name: '41'},
  {id: 42, name: '42'},
  {id: 43, name: '43'},
  {id: 44, name: '44'},
  {id: 45, name: '45'},
  {id: 46, name: '46'},
  {id: 47, name: 'b47'},
  {id: 48, name: 'b48'},
  {id: 49, name: 'b49'},
  {id: 50, name: 'b50'},
  {id: 51, name: 'b51'},
  {id: 52, name: 'b52'},
  {id: 53, name: 'b53'},
  {id: 54, name: 'b54'},
  {id: 55, name: 'b55'},
  {id: 56, name: 'b56'},
  {id: 57, name: 'b57'},
  {id: 58, name: '58'},
  {id: 59, name: '59'},
  {id: 60, name: '60'},
  {id: 61, name: '61'},
  {id: 62, name: '62'},
  {id: 63, name: '63'},
  {id: 64, name: '64'},
  {id: 65, name: '65'},
  {id: 66, name: '66'},
  {id: 67, name: '67'},
  {id: 68, name: '68'},
  {id: 69, name: '69'},
  {id: 70, name: '70'},
  {id: 71, name: '71'},
  {id: 72, name: '72'},
  {id: 73, name: 'b73'},
  {id: 74, name: 'b74'},
  {id: 75, name: 'b75'},
  {id: 76, name: 'b76'},
  {id: 77, name: 'b77'},
  {id: 78, name: 'b78'},
  {id: 79, name: 'b79'},
  {id: 80, name: '80'},
  {id: 81, name: '81'},
  {id: 82, name: 'b82'},
  {id: 83, name: 'b83'},
  {id: 84, name: '84'},
  {id: 85, name: '85'},
  {id: 86, name: '86'},
  {id: 87, name: '87'},
  {id: 88, name: '88'},
  {id: 89, name: '89'},
  {id: 90, name: '90'},
  {id: 91, name: '91'},
  {id: 92, name: '92'},
  {id: 93, name: '93'},
  {id: 94, name: '94'},
  {id: 95, name: '95'},
  {id: 96, name: '96'},
  {id: 97, name: '97'},
  {id: 98, name: '98'},
  {id: 99, name: '99'},
  {id: 100, name: '100'},
  {id: 101, name: '101'},
  {id: 102, name: '102'},
  {id: 103, name: '103'},
  {id: 104, name: '104'},
  {id: 105, name: '105'},
  {id: 106, name: '106'},
  {id: 107, name: '107'},
  {id: 108, name: '108'},
  {id: 109, name: '109'},
  {id: 110, name: '110'},
  {id: 111, name: '111'},
  {id: 112, name: '112'},
  {id: 113, name: '113'},
  {id: 114, name: '114'},
  {id: 115, name: '115'},
  {id: 116, name: '116'},
  {id: 117, name: '117'},
  {id: 118, name: '118'},
  {id: 119, name: '119'},
  {id: 120, name: '120'},
  {id: 121, name: '121'},
  {id: 122, name: '122'},
  {id: 123, name: '123'},
  {id: 124, name: '124'},
  {id: 125, name: '125'},
  {id: 126, name: '126'},
  {id: 127, name: '127'},
  {id: 128, name: '128'},
  {id: 129, name: '129'},
  {id: 130, name: '130'},
  {id: 131, name: '131'},
  {id: 132, name: '132'},
  {id: 133, name: '133'},
  {id: 134, name: '134'},
  {id: 135, name: '135'},
  {id: 136, name: '136'},
  {id: 137, name: '137'},
  {id: 138, name: '138'},
  {id: 139, name: '139'},
  {id: 140, name: '140'},
  {id: 141, name: '141'},
  {id: 142, name: '142'},
  {id: 143, name: '143'},
  {id: 144, name: '144'},
  {id: 145, name: '145'},
  {id: 146, name: '146'},
  {id: 147, name: '147'},
  {id: 148, name: '148'},
  {id: 149, name: '149'},
  {id: 150, name: '150'},
  {id: 151, name: '151'},
  {id: 152, name: '152'},
  {id: 153, name: '153'},
  {id: 154, name: '154'},
  {id: 155, name: '155'},
  {id: 156, name: '156'},
  {id: 157, name: '157'},
  {id: 158, name: '158'},
  {id: 159, name: '159'},
  {id: 160, name: '160'},
  {id: 161, name: '161'},
  {id: 162, name: '162'},
  {id: 163, name: '163'},
  {id: 164, name: '164'},
  {id: 165, name: '165'},
  {id: 166, name: '166'},
  {id: 167, name: '167'},
  {id: 168, name: '168'},
  {id: 169, name: '169'},
  {id: 170, name: '170'},
  {id: 171, name: '171'},
  {id: 172, name: '172'},
  {id: 173, name: '173'},
  {id: 174, name: '174'},
  {id: 175, name: '175'},
  {id: 176, name: '176'},
  {id: 177, name: '177'},
  {id: 178, name: '178'},
  {id: 179, name: '179'},
  {id: 180, name: '180'},
  {id: 181, name: '181'},
  {id: 182, name: '182'},
  {id: 183, name: '183'},
  {id: 184, name: '184'},
  {id: 185, name: '185'},
  {id: 186, name: '186'},
  {id: 187, name: '187'},
  {id: 188, name: '188'},
  {id: 189, name: '189'},
  {id: 190, name: '190'},
  {id: 191, name: '191'},
  {id: 192, name: '192'},
  {id: 193, name: '193'},
  {id: 194, name: '194'},
  {id: 195, name: '195'},
  {id: 196, name: '196'},
  {id: 197, name: '197'},
  {id: 198, name: '198'},
  {id: 199, name: '199'},
  {id: 200, name: '200'},
  {id: 201, name: '201'},
  {id: 202, name: '202'},
  {id: 203, name: '203'},
  {id: 204, name: '204'},
  {id: 205, name: '205'},
  {id: 206, name: '206'},
  {id: 207, name: '207'},
  {id: 208, name: '208'},
  {id: 209, name: '209'},
  {id: 210, name: '210'},
  {id: 211, name: '211'},
  {id: 212, name: '212'},
  {id: 213, name: '213'},
  {id: 214, name: '214'},
  {id: 215, name: '215'},
  {id: 216, name: '216'},
  {id: 217, name: '217'},
  {id: 218, name: '218'},
  {id: 219, name: '219'},
  {id: 220, name: '220'},
  {id: 221, name: '221'},
  {id: 222, name: '222'},
  {id: 223, name: '223'},
  {id: 224, name: '224'},
  {id: 225, name: '225'},
]

class Game4c extends Component {
  state = {
    a: 0,
    l: [],
    k: [],
    v: 0,
    z: [],
    e: [],
    y: [],
    y1: [],
    y6: [],
    y7: [],
    y8: [],
    y9: [],
    y10: [],
    y11: [],
    y12: [],
    y13: [],
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.firstAt()
    }, 5000)
  }

  stopIt1 = () => clearInterval(this.intervalId)

  firstAt = () => {
    this.setState({l: []})
    const t1 = Math.floor(Math.random() * 10)
    const t2 = Math.floor(Math.random() * 10)
    const t3 = Math.floor(Math.random() * 10)

    if (t1 === 0) {
      this.setState(prevState => ({l: [...prevState.l, t1 + 1]}))
    } else {
      this.setState(prevState => ({l: [...prevState.l, t1]}))
    }

    if (t2 === 0) {
      this.setState(prevState => ({l: [...prevState.l, t2 + 1]}))
    } else {
      this.setState(prevState => ({l: [...prevState.l, t2]}))
    }
    if (t3 === 0) {
      this.setState(prevState => ({l: [...prevState.l, t3 + 1]}))
    } else {
      this.setState(prevState => ({l: [...prevState.l, t3]}))
    }
  }

  fd2 = () => {
    this.intervalId = setInterval(() => {
      this.secondAt()
    }, 5000)
  }

  fd3 = () => {
    this.intervalId = setInterval(() => {
      this.thirdAt()
    }, 5000)
  }

  fd4 = () => {
    this.intervalId = setInterval(() => {
      this.fourthAt()
    }, 5000)
  }

  fd5 = () => {
    this.intervalId = setInterval(() => {
      this.fifthAt()
    }, 5000)
  }

  fd6 = () => {
    this.intervalId = setInterval(() => {
      this.sixthAt()
    }, 5000)
  }

  fd7 = () => {
    this.intervalId = setInterval(() => {
      this.seventhAt()
    }, 5000)
  }

  fd8 = () => {
    this.intervalId = setInterval(() => {
      this.eigthAt()
    }, 5000)
  }

  fd9 = () => {
    this.intervalId = setInterval(() => {
      this.ninthAt()
    }, 5000)
  }

  fd10 = () => {
    this.intervalId = setInterval(() => {
      this.tenthAt()
    }, 5000)
  }

  fd11 = () => {
    this.intervalId = setInterval(() => {
      this.eleventhAt()
    }, 5000)
  }

  fd12 = () => {
    this.intervalId = setInterval(() => {
      this.twelvthAt()
    }, 5000)
  }

  fd13 = () => {
    this.intervalId = setInterval(() => {
      this.thirteenAt()
    }, 5000)
  }

  secondAt = () => {
    this.setState({z: []})
    const t1 = Math.floor(Math.random() * 10)
    const t2 = Math.floor(Math.random() * 10)
    const t3 = Math.floor(Math.random() * 10)
    const t4 = Math.floor(Math.random() * 10)

    if (t1 === 0) {
      this.setState(prevState => ({z: [...prevState.z, t1 + 1]}))
    } else {
      this.setState(prevState => ({z: [...prevState.z, t1]}))
    }

    if (t2 === 0) {
      this.setState(prevState => ({z: [...prevState.z, t2 + 1]}))
    } else {
      this.setState(prevState => ({z: [...prevState.z, t2]}))
    }
    if (t3 === 0) {
      this.setState(prevState => ({z: [...prevState.z, t3 + 1]}))
    } else {
      this.setState(prevState => ({z: [...prevState.z, t3]}))
    }

    if (t4 === 0) {
      this.setState(prevState => ({z: [...prevState.z, t4 + 1]}))
    } else {
      this.setState(prevState => ({z: [...prevState.z, t4]}))
    }
  }

  thirdAt = () => {
    this.setState({e: []})
    const t1 = Math.floor(Math.random() * 10)
    const t2 = Math.floor(Math.random() * 10)
    const t3 = Math.floor(Math.random() * 10)
    const t4 = Math.floor(Math.random() * 10)
    const t5 = Math.floor(Math.random() * 10)

    if (t1 === 0) {
      this.setState(prevState => ({e: [...prevState.e, t1 + 1]}))
    } else {
      this.setState(prevState => ({e: [...prevState.e, t1]}))
    }

    if (t2 === 0) {
      this.setState(prevState => ({e: [...prevState.e, t2 + 1]}))
    } else {
      this.setState(prevState => ({e: [...prevState.e, t2]}))
    }
    if (t3 === 0) {
      this.setState(prevState => ({e: [...prevState.e, t3 + 1]}))
    } else {
      this.setState(prevState => ({e: [...prevState.e, t3]}))
    }

    if (t4 === 0) {
      this.setState(prevState => ({e: [...prevState.e, t4 + 1]}))
    } else {
      this.setState(prevState => ({e: [...prevState.e, t4]}))
    }

    if (t5 === 0) {
      this.setState(prevState => ({e: [...prevState.e, t5 + 1]}))
    } else {
      this.setState(prevState => ({e: [...prevState.e, t5]}))
    }
  }

  fourthAt = () => {
    this.setState({y: []})

    const t1 = Math.floor(Math.random() * 10)
    const t2 = Math.floor(Math.random() * 10)
    const t3 = Math.floor(Math.random() * 10)
    const t4 = Math.floor(Math.random() * 10)
    const t5 = Math.floor(Math.random() * 10)
    const t6 = Math.floor(Math.random() * 10)

    if (t1 === 0) {
      this.setState(prevState => ({y: [...prevState.y, t1 + 1]}))
    } else {
      this.setState(prevState => ({y: [...prevState.y, t1]}))
    }

    if (t2 === 0) {
      this.setState(prevState => ({y: [...prevState.y, t2 + 1]}))
    } else {
      this.setState(prevState => ({y: [...prevState.y, t2]}))
    }
    if (t3 === 0) {
      this.setState(prevState => ({y: [...prevState.y, t3 + 1]}))
    } else {
      this.setState(prevState => ({y: [...prevState.y, t3]}))
    }

    if (t4 === 0) {
      this.setState(prevState => ({y: [...prevState.y, t4 + 1]}))
    } else {
      this.setState(prevState => ({y: [...prevState.y, t4]}))
    }

    if (t5 === 0) {
      this.setState(prevState => ({y: [...prevState.y, t5 + 1]}))
    } else {
      this.setState(prevState => ({y: [...prevState.y, t5]}))
    }
    if (t6 === 0) {
      this.setState(prevState => ({y: [...prevState.y, t6 + 1]}))
    } else {
      this.setState(prevState => ({y: [...prevState.y, t6]}))
    }
  }

  fifthAt = () => {
    this.setState({y1: []})
    const t1 = Math.floor(Math.random() * 10)
    const t2 = Math.floor(Math.random() * 10)
    const t3 = Math.floor(Math.random() * 10)
    const t4 = Math.floor(Math.random() * 10)
    const t5 = Math.floor(Math.random() * 10)
    const t6 = Math.floor(Math.random() * 10)
    const t7 = Math.floor(Math.random() * 10)

    if (t1 === 0) {
      this.setState(prevState => ({y1: [...prevState.y1, t1 + 1]}))
    } else {
      this.setState(prevState => ({y1: [...prevState.y1, t1]}))
    }

    if (t2 === 0) {
      this.setState(prevState => ({y1: [...prevState.y1, t2 + 1]}))
    } else {
      this.setState(prevState => ({y1: [...prevState.y1, t2]}))
    }
    if (t3 === 0) {
      this.setState(prevState => ({y1: [...prevState.y1, t3 + 1]}))
    } else {
      this.setState(prevState => ({y1: [...prevState.y1, t3]}))
    }

    if (t4 === 0) {
      this.setState(prevState => ({y1: [...prevState.y1, t4 + 1]}))
    } else {
      this.setState(prevState => ({y1: [...prevState.y1, t4]}))
    }

    if (t5 === 0) {
      this.setState(prevState => ({y1: [...prevState.y1, t5 + 1]}))
    } else {
      this.setState(prevState => ({y1: [...prevState.y1, t5]}))
    }
    if (t6 === 0) {
      this.setState(prevState => ({y1: [...prevState.y1, t6 + 1]}))
    } else {
      this.setState(prevState => ({y1: [...prevState.y1, t6]}))
    }
    if (t7 === 0) {
      this.setState(prevState => ({y1: [...prevState.y1, t7 + 1]}))
    } else {
      this.setState(prevState => ({y1: [...prevState.y1, t7]}))
    }
  }

  sixthAt = () => {
    this.setState({y6: []})

    const t1 = Math.floor(Math.random() * 10)
    const t2 = Math.floor(Math.random() * 10)
    const t3 = Math.floor(Math.random() * 10)
    const t4 = Math.floor(Math.random() * 10)
    const t5 = Math.floor(Math.random() * 10)
    const t6 = Math.floor(Math.random() * 10)
    const t7 = Math.floor(Math.random() * 10)
    const t8 = Math.floor(Math.random() * 10)

    if (t1 === 0) {
      this.setState(prevState => ({y6: [...prevState.y6, t1 + 1]}))
    } else {
      this.setState(prevState => ({y6: [...prevState.y6, t1]}))
    }

    if (t2 === 0) {
      this.setState(prevState => ({y6: [...prevState.y6, t2 + 1]}))
    } else {
      this.setState(prevState => ({y6: [...prevState.y6, t2]}))
    }
    if (t3 === 0) {
      this.setState(prevState => ({y6: [...prevState.y6, t3 + 1]}))
    } else {
      this.setState(prevState => ({y6: [...prevState.y6, t3]}))
    }

    if (t4 === 0) {
      this.setState(prevState => ({y6: [...prevState.y6, t4 + 1]}))
    } else {
      this.setState(prevState => ({y6: [...prevState.y6, t4]}))
    }

    if (t5 === 0) {
      this.setState(prevState => ({y6: [...prevState.y6, t5 + 1]}))
    } else {
      this.setState(prevState => ({y6: [...prevState.y6, t5]}))
    }
    if (t6 === 0) {
      this.setState(prevState => ({y6: [...prevState.y6, t6 + 1]}))
    } else {
      this.setState(prevState => ({y6: [...prevState.y6, t6]}))
    }
    if (t7 === 0) {
      this.setState(prevState => ({y6: [...prevState.y6, t7 + 1]}))
    } else {
      this.setState(prevState => ({y6: [...prevState.y6, t7]}))
    }

    if (t8 === 0) {
      this.setState(prevState => ({y6: [...prevState.y6, t8 + 1]}))
    } else {
      this.setState(prevState => ({y6: [...prevState.y6, t8]}))
    }
  }

  seventAt = () => {
    this.setState({y7: []})

    const t1 = Math.floor(Math.random() * 10)
    const t2 = Math.floor(Math.random() * 10)
    const t3 = Math.floor(Math.random() * 10)
    const t4 = Math.floor(Math.random() * 10)
    const t5 = Math.floor(Math.random() * 10)
    const t6 = Math.floor(Math.random() * 10)
    const t7 = Math.floor(Math.random() * 10)
    const t8 = Math.floor(Math.random() * 10)
    const t9 = Math.floor(Math.random() * 10)

    if (t1 === 0) {
      this.setState(prevState => ({y7: [...prevState.y7, t1 + 1]}))
    } else {
      this.setState(prevState => ({y7: [...prevState.y7, t1]}))
    }

    if (t2 === 0) {
      this.setState(prevState => ({y7: [...prevState.y7, t2 + 1]}))
    } else {
      this.setState(prevState => ({y7: [...prevState.y7, t2]}))
    }
    if (t3 === 0) {
      this.setState(prevState => ({y7: [...prevState.y7, t3 + 1]}))
    } else {
      this.setState(prevState => ({y7: [...prevState.y7, t3]}))
    }

    if (t4 === 0) {
      this.setState(prevState => ({y7: [...prevState.y7, t4 + 1]}))
    } else {
      this.setState(prevState => ({y7: [...prevState.y7, t4]}))
    }

    if (t5 === 0) {
      this.setState(prevState => ({y7: [...prevState.y7, t5 + 1]}))
    } else {
      this.setState(prevState => ({y7: [...prevState.y7, t5]}))
    }
    if (t6 === 0) {
      this.setState(prevState => ({y7: [...prevState.y7, t6 + 1]}))
    } else {
      this.setState(prevState => ({y7: [...prevState.y7, t6]}))
    }
    if (t7 === 0) {
      this.setState(prevState => ({y7: [...prevState.y7, t7 + 1]}))
    } else {
      this.setState(prevState => ({y7: [...prevState.y7, t7]}))
    }

    if (t8 === 0) {
      this.setState(prevState => ({y7: [...prevState.y7, t8 + 1]}))
    } else {
      this.setState(prevState => ({y7: [...prevState.y7, t8]}))
    }

    if (t9 === 0) {
      this.setState(prevState => ({y7: [...prevState.y7, t9 + 1]}))
    } else {
      this.setState(prevState => ({y7: [...prevState.y7, t9]}))
    }
  }

  eigthAt = () => {
    const e1 = Math.floor(Math.random() * 10)
    const e2 = Math.floor(Math.random() * 10)
    const e3 = Math.floor(Math.random() * 10)
    const e4 = Math.floor(Math.random() * 10)
    const e5 = Math.floor(Math.random() * 10)
    const e6 = Math.floor(Math.random() * 10)
    const e7 = Math.floor(Math.random() * 10)
    const e8 = Math.floor(Math.random() * 10)
    const e9 = Math.floor(Math.random() * 10)
    const e10 = Math.floor(Math.random() * 10)

    this.setState(prevState => ({y8: [e1, e2, e3, e4, e5, e6, e7, e8, e9, 10]}))
  }

  ninthAt = () => {
    const e1 = Math.floor(Math.random() * 10)
    const e2 = Math.floor(Math.random() * 10)
    const e3 = Math.floor(Math.random() * 10)
    const e4 = Math.floor(Math.random() * 10)
    const e5 = Math.floor(Math.random() * 10)
    const e6 = Math.floor(Math.random() * 10)
    const e7 = Math.floor(Math.random() * 10)
    const e8 = Math.floor(Math.random() * 10)
    const e9 = Math.floor(Math.random() * 10)
    const e10 = Math.floor(Math.random() * 10)
    const e11 = Math.floor(Math.random() * 10)

    this.setState(prevState => ({
      y9: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11],
    }))
  }

  tenthAt = () => {
    const e1 = Math.floor(Math.random() * 10)
    const e2 = Math.floor(Math.random() * 10)
    const e3 = Math.floor(Math.random() * 10)
    const e4 = Math.floor(Math.random() * 10)
    const e5 = Math.floor(Math.random() * 10)
    const e6 = Math.floor(Math.random() * 10)
    const e7 = Math.floor(Math.random() * 10)
    const e8 = Math.floor(Math.random() * 10)
    const e9 = Math.floor(Math.random() * 10)
    const e10 = Math.floor(Math.random() * 10)
    const e11 = Math.floor(Math.random() * 10)
    const e12 = Math.floor(Math.random() * 10)

    this.setState(prevState => ({
      y10: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12],
    }))
  }

  eleventhAt = () => {
    const e1 = Math.floor(Math.random() * 10)
    const e2 = Math.floor(Math.random() * 10)
    const e3 = Math.floor(Math.random() * 10)
    const e4 = Math.floor(Math.random() * 10)
    const e5 = Math.floor(Math.random() * 10)
    const e6 = Math.floor(Math.random() * 10)
    const e7 = Math.floor(Math.random() * 10)
    const e8 = Math.floor(Math.random() * 10)
    const e9 = Math.floor(Math.random() * 10)
    const e10 = Math.floor(Math.random() * 10)
    const e11 = Math.floor(Math.random() * 10)
    const e12 = Math.floor(Math.random() * 10)
    const e13 = Math.floor(Math.random() * 10)

    this.setState(prevState => ({
      y11: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13],
    }))
  }

  twelthAt = () => {
    const e1 = Math.floor(Math.random() * 10)
    const e2 = Math.floor(Math.random() * 10)
    const e3 = Math.floor(Math.random() * 10)
    const e4 = Math.floor(Math.random() * 10)
    const e5 = Math.floor(Math.random() * 10)
    const e6 = Math.floor(Math.random() * 10)
    const e7 = Math.floor(Math.random() * 10)
    const e8 = Math.floor(Math.random() * 10)
    const e9 = Math.floor(Math.random() * 10)
    const e10 = Math.floor(Math.random() * 10)
    const e11 = Math.floor(Math.random() * 10)
    const e12 = Math.floor(Math.random() * 10)
    const e13 = Math.floor(Math.random() * 10)
    const e14 = Math.floor(Math.random() * 10)

    this.setState(prevState => ({
      y12: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14],
    }))
  }

  thirteenAt = () => {
    const e1 = Math.floor(Math.random() * 10)
    const e2 = Math.floor(Math.random() * 10)
    const e3 = Math.floor(Math.random() * 10)
    const e4 = Math.floor(Math.random() * 10)
    const e5 = Math.floor(Math.random() * 10)
    const e6 = Math.floor(Math.random() * 10)
    const e7 = Math.floor(Math.random() * 10)
    const e8 = Math.floor(Math.random() * 10)
    const e9 = Math.floor(Math.random() * 10)
    const e10 = Math.floor(Math.random() * 10)
    const e11 = Math.floor(Math.random() * 10)
    const e12 = Math.floor(Math.random() * 10)
    const e13 = Math.floor(Math.random() * 10)
    const e14 = Math.floor(Math.random() * 10)
    const e15 = Math.floor(Math.random() * 10)

    this.setState(prevState => ({
      y13: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15],
    }))
  }

  stopIt2 = () => clearInterval(this.intervalId)

  scruit = () => {
    const {l, k, a} = this.state
    if (l[0] === k[0] && l[1] === k[1] && l[2] === k[2]) {
      this.clearInterval()
      console.log('congrats')
      this.hp()
    } else {
      console.log('not yet')
    }
  }

  hp = () => {
    const {a} = this.state
    console.log('happy')
  }

  playerList = id => {
    const {k} = this.state
    console.log(id)
    this.setState({k: [...k, id]})
  }

  reset = () => {
    this.setState({l: [], k: [], v: 1})
    this.setState(prevState => ({a: !prevState.a}))
    this.componentDidMount()
  }

  h = () => {
    this.setState({k: []})
  }

  render() {
    const {
      a,
      l,
      c,
      k,
      v,
      z,
      e,
      y,
      y1,
      y6,
      y7,
      y8,
      y9,
      y10,
      y11,
      y12,
    } = this.state
    console.log('a')
    console.log(k)

    if (k.length >= 88) {
      this.stopIt2()
      console.log(l)
      this.fd12()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>

              <h1 className="hdng">Memory Matrix</h1>

              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{y12}</h1>
          <ul className="fg">
            {l12.map(x => (
              <CardArrange7
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (k.length >= 75) {
      this.stopIt2()
      console.log(l)
      this.fd12()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{y11}</h1>
          <ul className="fg">
            {l11.map(x => (
              <CardArrange7
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (k.length >= 63) {
      this.stopIt2()
      console.log(l)
      this.fd10()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{y10}</h1>
          <ul className="fg">
            {l10.map(x => (
              <CardArrange7
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (k.length >= 52) {
      this.stopIt2()
      console.log(l)
      this.fd9()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{y9}</h1>
          <ul className="fg">
            {l9.map(x => (
              <CardArrange7
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (k.length >= 42) {
      this.stopIt2()
      console.log(l)
      this.fd8()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{y8}</h1>
          <ul className="fg">
            {l8.map(x => (
              <CardArrange7
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (k.length >= 33) {
      this.stopIt2()
      console.log(l)
      this.fd7()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{y7}</h1>
          <ul className="fg">
            {l7.map(x => (
              <CardArrange7
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (k.length >= 25) {
      this.stopIt2()
      console.log(l)
      this.fd6()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{y6}</h1>
          <ul className="fg">
            {l6.map(x => (
              <CardArrange6
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (k.length >= 18) {
      this.stopIt2()
      console.log(l)
      this.fd5()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{y1}</h1>
          <ul className="fg">
            {l5.map(x => (
              <CardArrange5
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (k.length >= 12) {
      this.stopIt2()
      console.log(l)
      this.fd4()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{y}</h1>
          <ul className="fg">
            {l4.map(x => (
              <CardArrange4
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (
      k.length >= 7 &&
      z[0] === k[3] &&
      z[1] === k[4] &&
      z[2] === k[5] &&
      z[3] === k[6]
    ) {
      this.stopIt2()
      console.log(l)
      this.fd3()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{e}</h1>
          <ul className="fg">
            {l3.map(x => (
              <CardArrange3
                x={x}
                id={x.id}
                playerList={this.playerList}
                a={a}
              />
            ))}
          </ul>
        </div>
      )
    }

    if (
      k.length >= 3 &&
      l[0] === k[0] &&
      l[1] === k[1] &&
      l[2] === k[2] &&
      k.length < 7
    ) {
      this.stopIt1()
      console.log(l)
      this.fd2()
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  {' '}
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <ul>
                        <li>
                          <p>level1: 159</p>
                        </li>

                        <li>
                          <p>level2:1 6 11 16</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div>
            {' '}
            <h1>{z}</h1>
            <ul className="fg">
              {l2.map(x => (
                <CardArrange2
                  x={x}
                  id={x.id}
                  playerList={this.playerList}
                  a={a}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }

    if (k.length >= 0 && k.length < 3) {
      return (
        <div className="ab">
          <div className="first">
            {' '}
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix!</h1>
              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <div>
                        <ul>
                          <li>
                            <p>
                              {' '}
                              In each level of the Game, Users should be able to
                              see the Grid with (N X N) size starting from 3 and
                              the grid will highlight N cells in Blue, the N
                              highlighted cells will be picked randomly.
                            </p>
                          </li>
                          <li>
                            The highlighted cells will remain N seconds for the
                            user to memorize the cells. At this point, the user
                            should not be able to perform any action.
                          </li>
                          <li>
                            After N seconds, the grid will clear the N
                            highlighted cells.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            At N seconds, the user can click on any cell.
                            Clicking on a cell that was highlighted before it
                            will turn blue. Clicking on the other cells that
                            were not highlighted before then will turn to red.
                          </li>
                          <li>
                            The user should be promoted to the next level if
                            they guess all N cells correctly in one attempt.
                          </li>
                          <li>
                            The user should be taken to the results page if the
                            user clicks on the wrong cell.
                          </li>
                          <li>
                            If the user completed all the levels, then the user
                            should be taken to the results page.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div className="m1n">
            <h1 className="h1n">{l}</h1>
            <ul className="fg">
              {l1.map(x => (
                <CardArrange
                  x={x}
                  id={x.id}
                  playerList={this.playerList}
                  a={a}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <div className="">
        <div>
          <div className="first">
            <div className="snd">
              <Link to="/game4rules">
                <button type="button" className="bc35">
                  back
                </button>
              </Link>
              <h1 className="hdng">Memory Matrix</h1>

              <Popup
                trigger={<button className="btn2"> Rules </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header text-center"> Rules </div>

                    <div className="content">
                      <div>
                        <ul>
                          <li>
                            <p>
                              {' '}
                              In each level of the Game, Users should be able to
                              see the Grid with (N X N) size starting from 3 and
                              the grid will highlight N cells in Blue, the N
                              highlighted cells will be picked randomly.
                            </p>
                          </li>
                          <li>
                            The highlighted cells will remain N seconds for the
                            user to memorize the cells. At this point, the user
                            should not be able to perform any action.
                          </li>
                          <li>
                            After N seconds, the grid will clear the N
                            highlighted cells.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            At N seconds, the user can click on any cell.
                            Clicking on a cell that was highlighted before it
                            will turn blue. Clicking on the other cells that
                            were not highlighted before then will turn to red.
                          </li>
                          <li>
                            The user should be promoted to the next level if
                            they guess all N cells correctly in one attempt.
                          </li>
                          <li>
                            The user should be taken to the results page if the
                            user clicks on the wrong cell.
                          </li>
                          <li>
                            If the user completed all the levels, then the user
                            should be taken to the results page.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <h1>{l}</h1>
          <ul className="fg">
            {l1.map(x => (
              <CardArrange x={x} id={x.id} playerList={this.playerList} a={a} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Game4c

