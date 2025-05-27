import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { 
  Container, 
  ButtonFilterText,
  ModalContent,
  ButtonFilter
} from './styles';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markeddates, setMarkedDates] = useState({});

  function handleOnDayPress(date) {
    setDateNow(new Date(date.dateString));

    let markedDay = {};
    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3B3DBF',
      textColor: '#FFFFFF'
    };

    setMarkedDates(markedDay);
  }

  function handleFilterDate() {
    handleFilter(dateNow);
    setVisible();
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markeddates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#3B3DBF',
            selectedDayBackgroundColor: '#3B3DBF',
            selectedDayTextColor: '#FFFFFF',
            arrowColor: '#3B3DBF',
            textMonthFontWeight: 'bold',
            textDayFontWeight: '500',
            textDayHeaderFontWeight: 'bold',
            monthTextColor: '#3B3DBF'
          }}
        />

        <ButtonFilter onPress={handleFilterDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  );
}
