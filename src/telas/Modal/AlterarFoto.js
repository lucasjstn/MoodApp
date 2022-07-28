import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Image,
  Alert,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {darkBlue, fontePadrao, lightBlue, lightColor} from '../../constantes';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const AlterarPerfil = () 