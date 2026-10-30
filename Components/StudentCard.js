import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.studentInfo}>
        <Image
          source={{ uri: photoUrl }}
          style={styles.photo}
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {name}
          </Text>

          <Text style={styles.year}>
            {year}
          </Text>
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={
          flagged
            ? `Unflag ${name} for advising`
            : `Flag ${name} for advising`
        }
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged
            ? styles.flaggedButton
            : styles.unflaggedButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text
          style={[
            styles.flagButtonText,
            flagged && styles.flaggedButtonText,
          ]}
        >
          {flagged ? '★ Flagged' : '☆ Flag'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FCFBFF',
    borderWidth: 1,
    borderColor: '#E5E1EF',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginBottom: 11,
    minHeight: 69,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#30265C',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },

  studentInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  photo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#8C83B5',
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#29273B',
  },

  year: {
    fontSize: 12,
    marginTop: 3,
    color: '#8982A6',
  },

  flagButton: {
    minHeight: 32,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  unflaggedButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.3,
    borderColor: '#9287B2',
  },

  flaggedButton: {
    backgroundColor: '#D09200',
    borderWidth: 1,
    borderColor: '#D09200',
  },

  pressedButton: {
    opacity: 0.65,
    transform: [
      {
        scale: 0.97,
      },
    ],
  },

  flagButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#81779F',
  },

  flaggedButtonText: {
    color: '#FFFFFF',
  },
});