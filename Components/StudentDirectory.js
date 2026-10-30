import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

import StudentCard from './StudentCard';

export default function StudentDirectory() {
  const [students, setStudents] = useState([
    {
      id: 's1',
      name: 'Ana Cruz',
      year: '3rd Year',
      photoUrl: 'https://ui-avatars.com/api/?name=Ana+Cruz&background=756D9F&color=fff&size=128&bold=true',
      flagged: true,
    },
    {
      id: 's2',
      name: 'Bea Santos',
      year: '2nd Year',
      photoUrl: 'https://ui-avatars.com/api/?name=Bea+Santos&background=A49AC9&color=fff&size=128&bold=true',
      flagged: false,
    },
    {
      id: 's3',
      name: 'Cid Ramos',
      year: '4th Year',
      photoUrl: 'https://ui-avatars.com/api/?name=Cid+Ramos&background=D09200&color=fff&size=128&bold=true',
      flagged: false,
    },
    {
      id: 's4',
      name: 'Dex Alonzo',
      year: '1st Year',
      photoUrl: 'https://ui-avatars.com/api/?name=Dex+Alonzo&background=756D9F&color=fff&size=128&bold=true',
      flagged: false,
    },
    {
      id: 's5',
      name: 'Eli Tan',
      year: '3rd Year',
      photoUrl: 'https://ui-avatars.com/api/?name=Eli+Tan&background=A49AC9&color=fff&size=128&bold=true',
      flagged: false,
    },
  ]);

  const [query, setQuery] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  const toggleFlag = (studentId) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              flagged: !student.flagged,
            }
          : student
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Student Directory
        </Text>

        <Text style={styles.subtitle}>
          {students.length} students this term
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <View style={styles.searchLens} />
            <View style={styles.searchHandle} />
          </View>

          <TextInput
            style={styles.searchInput}
            placeholder="Search students..."
            placeholderTextColor="#8982A6"
            value={query}
            onChangeText={setQuery}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                year={student.year}
                photoUrl={student.photoUrl}
                flagged={student.flagged}
                onToggleFlag={toggleFlag}
              />
            ))
          ) : (
            <Text style={styles.emptyState}>
              No students found.
            </Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    backgroundColor: '#1C194F',
    paddingHorizontal: 20,
    paddingTop: 9,
    paddingBottom: 12,
  },

  title: {
    fontSize: 19,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  subtitle: {
    fontSize: 12,
    marginTop: 3,
    color: '#C5C1E0',
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#FFFFFF',
  },

  searchContainer: {
    height: 39,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EEF8',
    borderWidth: 1,
    borderColor: '#E5E1F0',
    borderRadius: 11,
    paddingHorizontal: 13,
    marginBottom: 12,
  },

  searchIcon: {
    width: 17,
    height: 17,
    position: 'relative',
    marginRight: 6,
  },

  searchLens: {
    width: 10,
    height: 10,
    borderWidth: 1.5,
    borderColor: '#8982A6',
    borderRadius: 6,
    position: 'absolute',
    top: 1,
    left: 1,
  },

  searchHandle: {
    width: 6,
    height: 1.5,
    backgroundColor: '#8982A6',
    position: 'absolute',
    top: 11,
    left: 10,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },

  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 13,
    color: '#29273B',
    paddingVertical: 0,
    paddingHorizontal: 2,
  },

  scrollView: {
    flex: 1,
  },

  listContent: {
    paddingTop: 0,
    paddingBottom: 22,
  },

  emptyState: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 14,
    color: '#8982A6',
  },
});