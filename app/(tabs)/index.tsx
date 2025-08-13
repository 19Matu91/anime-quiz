import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  PixelRatio,
  Platform,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Utility para el tamaño de fuente responsive
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BASE_WIDTH = 414; // Ancho de pantalla base (ej. iPhone 11)
const DESKTOP_THRESHOLD = 768; // Umbral para considerar pantalla de escritorio/tablet
const MAX_SCALE = 1.5; // Limita el escalado para pantallas grandes

const normalize = (size) => {
  let scale = SCREEN_WIDTH / BASE_WIDTH;
  // Limita el factor de escala para evitar que los elementos sean demasiado grandes en pantallas de escritorio
  if (SCREEN_WIDTH > DESKTOP_THRESHOLD) {
    scale = Math.min(scale, MAX_SCALE);
  }
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

// Datos de prueba para la interfaz de usuario
const dailyRewards = [
  { id: '1', title: 'View Ad', gain: 10, image: 'https://i.imgur.com/Kz8jD2a.png', completed: false },
  { id: '2', title: 'Invite a Friend', gain: 50, image: 'https://i.imgur.com/2XyEwMh.png', completed: false },
  { id: '3', title: 'Complete 10 Quizzes', gain: 50, image: 'https://i.imgur.com/k6wMv3s.png', completed: true },
  { id: '4', title: 'Complete 1 Quiz', gain: 20, image: 'https://i.imgur.com/oW1dGDI.jpeg', completed: false },
];

const initialCollectionItems = [
  // 3 elementos desbloqueados
  { id: '1', title: 'Naruto', image: 'https://i.imgur.com/83R90z2.jpeg', unlocked: true, isImpossibleDisabled: false },
  { id: '2', title: 'One Piece', image: 'https://i.imgur.com/jG5V0zQ.jpeg', unlocked: true, isImpossibleDisabled: true },
  { id: '3', title: 'Attack on Titan', image: 'https://i.imgur.com/vH9Yk9I.jpeg', unlocked: true, isImpossibleDisabled: true },
  // 7 elementos bloqueados
  { id: '4', title: 'My Hero Academia', image: 'https://i.imgur.com/yE50n3O.jpeg', unlocked: false, isImpossibleDisabled: true },
  { id: '5', title: 'Chainsaw Man', image: 'https://i.imgur.com/pYxW3pX.jpeg', unlocked: false, isImpossibleDisabled: true },
  { id: '6', title: 'Spy x Family', image: 'https://i.imgur.com/UfB13d2.jpeg', unlocked: false, isImpossibleDisabled: true },
  { id: '7', title: 'Frieren: Beyond Journey\'s End', image: 'https://i.imgur.com/S78bM5t.jpeg', unlocked: false, isImpossibleDisabled: true },
  { id: '8', title: 'Solo Leveling', image: 'https://i.imgur.com/2Yc5R6G.jpeg', unlocked: false, isImpossibleDisabled: true },
  { id: '9', title: 'Jujutsu Kaisen', image: 'https://i.imgur.com/sYc7RzQ.jpeg', unlocked: false, isImpossibleDisabled: true },
  { id: '10', title: 'Vinland Saga', image: 'https://i.imgur.com/x07x2r5.jpeg', unlocked: false, isImpossibleDisabled: true },
];

const CollapsibleCollectionItem = ({ item, isExpanded, onToggle }) => {
  // Ahora el estado deshabilitado del botón 'Impossible' se basa en la propiedad del ítem.
  const isImpossibleDisabled = item.isImpossibleDisabled;

  return (
    <View style={[styles.collectionItemContainer, !item.unlocked && styles.lockedItemContainer]}>
      <TouchableOpacity
        onPress={() => item.unlocked && onToggle(item.id)}
        disabled={!item.unlocked}
        style={styles.touchableItem}
      >
        <Image source={{ uri: item.image }} style={styles.collectionImage} />
        <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)']} style={styles.collectionOverlay}>
          <Text style={styles.collectionTitle}>{item.title}</Text>
          {item.unlocked ? (
            <Ionicons
              name={isExpanded ? "chevron-up-outline" : "chevron-down-outline"}
              size={normalize(24)}
              color="#FFFFFF"
              style={{ marginLeft: normalize(10) }}
            />
          ) : (
            <View style={styles.collectionScore}>
              <Text style={styles.collectionScoreText}>100</Text>
              <Ionicons name="cash-outline" size={normalize(24)} color="#FFD700" />
            </View>
          )}
        </LinearGradient>
      </TouchableOpacity>
      {isExpanded && item.unlocked && (
        <View style={styles.expandedContent}>
          <TouchableOpacity style={[styles.buttonCommon, styles.difficultyButton, styles.easyButton]}>
            <Text style={styles.difficultyButtonText}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonCommon, styles.difficultyButton]}>
            <Text style={styles.difficultyButtonText}>Hard</Text>
          </TouchableOpacity>
          {/* Botón 'Impossible' con lógica para habilitar/deshabilitar según la propiedad del ítem */}
          <TouchableOpacity
            style={[styles.buttonCommon, styles.impossibleButton]}
            disabled={item.isImpossibleDisabled}
          >
            <Text style={[styles.impossibleButtonText, item.isImpossibleDisabled && styles.disabledText]}>Impossible</Text>
            {/* Se muestra el precio solo si el botón está deshabilitado */}
            {item.isImpossibleDisabled && (
              <View style={styles.rewardIcons}>
                <Text style={styles.rewardValueText}>200</Text>
                <Ionicons
                  name="cash-outline"
                  size={normalize(24)}
                  color="#FFD700"
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Se pasa el objeto de navegación como una prop
const HomeScreen = ({ }) => {
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(initialCollectionItems);

  // Hook para filtrar los items cada vez que cambia el texto de búsqueda
  useEffect(() => {
    if (searchText === '') {
      setFilteredItems(initialCollectionItems);
    } else {
      const filtered = initialCollectionItems.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchText]);

  const handleToggle = (itemId) => {
    setExpandedItemId(itemId === expandedItemId ? null : itemId);
  };

  const renderRewardItem = (item) => (
    <View
      key={item.id}
      style={[styles.rewardItem, item.completed && styles.rewardItemCompleted]}
    >
      <Image source={{ uri: item.image }} style={styles.rewardImage} />
      {item.completed && (
        <View style={styles.completedOverlay}>
          <Ionicons name="checkmark-circle" size={normalize(30)} color="#00E676" />
        </View>
      )}
      <View style={styles.rewardTextContainer}>
        <Text style={styles.rewardTitle}>{item.title}</Text>
        <View style={styles.rewardGainContainer}>
          <Text style={styles.rewardGainText}>gain {item.gain}</Text>
          <Ionicons name="cash-outline" size={normalize(18)} color="#FFD700" style={{ marginLeft: normalize(5) }} />
        </View>
      </View>
    </View>
  );

  return (
    <LinearGradient colors={['#2E3144', '#1A1C29']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://i.imgur.com/oW1dGDI.jpeg' }}
              style={styles.profileAvatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>MatutanoPoderoso</Text>
              <View style={styles.progressContainer}>
                <View style={styles.rankBadge}>
                  <Ionicons name="star" size={normalize(36)} color="#3498db" />
                  <Text style={styles.rankNumber}>1</Text>
                </View>
                <View style={styles.progressBar}>
                  <View style={styles.progressBarFill} />
                </View>
                <Text style={styles.progressText}>100/400</Text>
              </View>
            </View>
            <View style={styles.scoreContainer}>
              <View style={styles.scoreIcons}>
                <Ionicons name="cash-outline" size={normalize(24)} color="#FFD700" />
                <Text style={styles.scoreText}>000</Text>
              </View>
              {/* Se ha hecho el icono de 'add' clickeable y navega a la pantalla de Shop */}
              <TouchableOpacity onPress={() => router.push('/shop')}>
                <Ionicons name="add-circle-outline" size={normalize(24)} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Global/Local Scores */}
        <View style={styles.leaderboardContainer}>
          <View style={styles.leaderboardItem}>
            <View style={styles.leaderboardHeader}>
              <Ionicons name="earth" size={normalize(20)} color="#00E676" />
              <Text style={styles.leaderboardText}>GLOBAL</Text>
            </View>
            <Text style={styles.leaderboardValue}>50.000</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.leaderboardItem}>
            <View style={styles.leaderboardHeader}>
              <Image source={{ uri: 'https://i.imgur.com/6aO6Q6Q.png' }} style={styles.flagIcon} />
              <Text style={styles.leaderboardText}>LOCAL</Text>
            </View>
            <Text style={styles.leaderboardValue}>34</Text>
          </View>
          
          <View style={styles.separator} />

          <View style={styles.leaderboardItem}>
            <View style={styles.leaderboardHeader}>
              <Ionicons name="star" size={normalize(20)} color="#3498db" />
              <Text style={styles.leaderboardText}>SCORE</Text>
            </View>
            <Text style={styles.leaderboardValue}>1.02M</Text>
          </View>
        </View>

        {/* Rewards Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Earn rewards</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rewardsScroll}>
            {dailyRewards.map(renderRewardItem)}
          </ScrollView>
        </View>

        {/* Collection Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Collection</Text>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={normalize(20)} color="#9A9FBF" />
              {/* Nuevo contenedor para el input que toma el espacio restante y oculta el desbordamiento */}
              <View style={styles.searchInputWrapper}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor="#9A9FBF"
                  value={searchText}
                  onChangeText={setSearchText}
                />
              </View>
            </View>
          </View>
          {filteredItems.map(item => (
            <CollapsibleCollectionItem
              key={item.id}
              item={item}
              isExpanded={expandedItemId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </View>
        
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: normalize(20),
    paddingBottom: normalize(100),
  },
  // Header styles
  header: {
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E4256',
    borderRadius: normalize(20),
    padding: normalize(10),
    marginBottom: normalize(10),
    justifyContent: 'space-between',
  },
  profileAvatar: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
    borderWidth: normalize(2),
    borderColor: '#FFD700',
    marginRight: normalize(10),
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: normalize(18),
    fontFamily: 'sans-serif-light',
    color: '#FFFFFF',
    marginBottom: normalize(5),
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankBadge: {
    marginRight: normalize(10),
    position: 'relative',
    width: normalize(40),
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankNumber: {
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: normalize(18),
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: normalize(10),
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(2),
    borderRadius: normalize(10),
  },
  rankText: {
    color: '#FFFFFF',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  progressBar: {
    height: normalize(10),
    backgroundColor: '#1A1C29',
    borderRadius: normalize(5),
    flex: 1,
    marginRight: normalize(10),
  },
  progressBarFill: {
    height: '100%',
    width: '25%',
    backgroundColor: '#00E676',
    borderRadius: normalize(5),
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: normalize(12),
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: normalize(10),
    backgroundColor: '#1A1C29',
    borderRadius: normalize(20),
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(10),
  },
  scoreIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: normalize(18),
    color: '#FFFFFF',
    marginLeft: normalize(5),
    marginRight: normalize(5),
  },
  // Leaderboard Section
  leaderboardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
    borderBottomWidth: normalize(1),
    borderBottomColor: '#4A4E69',
    paddingBottom: normalize(10),
  },
  leaderboardItem: {
    alignItems: 'center',
  },
  leaderboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(5),
  },
  leaderboardText: {
    color: '#9A9FBF',
    fontSize: normalize(14),
    marginLeft: normalize(5),
  },
  leaderboardValue: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  flagIcon: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(10),
  },
  separator: {
    width: normalize(1),
    height: '100%',
    backgroundColor: '#4A4E69',
  },
  // General Section styles
  section: {
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: normalize(10), // Espaciado del título/búsqueda con el contenido
  },
  sectionTitle: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  // Rewards Section
  rewardsScroll: {
    paddingVertical: normalize(10),
  },
  rewardItem: {
    width: normalize(120),
    height: normalize(150),
    backgroundColor: '#3E4256',
    borderRadius: normalize(15),
    marginRight: normalize(15),
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: normalize(10),
  },
  rewardItemCompleted: {
    opacity: 0.6,
  },
  rewardImage: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(10),
    position: 'absolute',
    top: normalize(10),
  },
  rewardTextContainer: {
    width: '100%',
    alignItems: 'center',
  },
  rewardTitle: {
    color: '#FFFFFF',
    fontSize: normalize(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rewardGainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(5),
  },
  rewardGainText: {
    color: '#00E676',
    fontSize: normalize(12),
  },
  completedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Collection Section
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E4256',
    borderRadius: normalize(20),
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(8),
    flex: 1, // Permite que se ajuste en pantallas más pequeñas
    maxWidth: normalize(150),
  },
  searchInputWrapper: {
    flex: 1, // Este contenedor ocupa el espacio restante
    marginLeft: normalize(5),
    overflow: 'hidden', // Evita que el texto del input se desborde
  },
  searchInput: {
    color: '#FFFFFF',
    fontSize: normalize(14),
    // Eliminado el marginLeft ya que ahora está en el contenedor
  },
  collectionItemContainer: {
    marginBottom: normalize(15),
    borderRadius: normalize(15),
    overflow: 'hidden',
    backgroundColor: '#3E4256',
  },
  lockedItemContainer: {
    opacity: 0.6,
  },
  touchableItem: {
    width: '100%',
  },
  collectionImage: {
    width: '100%',
    height: normalize(150),
    resizeMode: 'cover',
  },
  collectionOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: normalize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  collectionTitle: {
    color: '#FFFFFF',
    fontSize: normalize(24),
    fontWeight: 'bold',
  },
  collectionScore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  collectionScoreText: {
    color: '#FFFFFF',
    fontSize: normalize(20),
    marginRight: normalize(5),
  },
  expandedContent: {
    padding: normalize(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Se ha unificado la altura y el padding de los botones
  buttonCommon: {
    flex: 1,
    marginHorizontal: normalize(2.5),
    height: normalize(40), // Altura fija para unificar
  },
  difficultyButtons: {
    flexDirection: 'row',
  },
  difficultyButton: {
    backgroundColor: '#4A4E69',
    borderRadius: normalize(10),
    paddingHorizontal: normalize(15),
    justifyContent: 'center', // Centrado vertical y horizontalmente
    alignItems: 'center',
  },
  easyButton: {
    backgroundColor: '#6A6F8F',
  },
  difficultyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: normalize(14),
  },
  impossibleButton: {
    backgroundColor: '#A84C4C',
    borderRadius: normalize(10),
    paddingHorizontal: normalize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  impossibleButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: normalize(14),
  },
  rewardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // Necesario para el posicionamiento absoluto del overlay
  },
  rewardValueText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: normalize(12),
    marginRight: normalize(5),
  },
  // Estilo para el overlay deshabilitado
  disabledOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(50, 50, 50, 0.6)', // Gris semi-transparente
    borderRadius: normalize(10),
  },
  // Estilo para texto deshabilitado
  disabledText: {
    color: '#9A9FBF',
  },
});

export default HomeScreen;
