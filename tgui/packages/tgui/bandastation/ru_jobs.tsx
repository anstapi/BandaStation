export const JOBS_RU = {
  Assistant: 'Гражданин',
  Prisoner: 'Бездомный',
  Captain: 'Мэр',
  'Head of Personnel': 'Кадровый менеджер',
  'Head of Security': 'Начальник PD',
  'Research Director': 'Директор лаборатории',
  'Chief Engineer': 'Координатор ID',
  'Chief Medical Officer': 'Главный врач',
  AI: 'ИИ',
  Cyborg: 'Киборг',
  'Personal AI': 'Персональный ИИ',
  'Human AI': 'Большой брат',
  Warden: 'Суперинтендант',
  Detective: 'Криминалист',
  'Security Officer': 'Офицер PD',
  'Security Officer (Cargo)': 'Офицер PD (Снабжение)',
  'Security Officer (Engineering)': 'Офицер PD (Инженерия)',
  'Security Officer (Medical)': 'Офицер PD (Медицина)',
  'Security Officer (Science)': 'Офицер PD (Исследование)',
  'Station Engineer': 'Специалист ID',
  'Atmospheric Technician': 'Специалист энергосистем',
  Coroner: 'Коронер',
  'Medical Doctor': 'Врач',
  Paramedic: 'Парамедик',
  Chemist: 'Химик',
  Scientist: 'Ученый',
  Roboticist: 'Робототехник',
  Geneticist: 'Генетик',
  Quartermaster: 'Руководитель снабжения',
  'Cargo Technician': 'Сотрудник ПВЗ',
  'Shaft Miner': 'Шахтер',
  Bitrunner: 'Нетраннер',
  Explorer: 'Исследователь',
  Bartender: 'Бармен',
  Botanist: 'Ботаник',
  Cook: 'Повар',
  Chef: 'Шеф',
  Janitor: 'Уборщик',
  Clown: 'Клоун',
  Mime: 'Мим',
  Curator: 'Куратор',
  Lawyer: 'Юрист',
  Chaplain: 'Священник',
  Psychologist: 'Психолог',
  // BANDASTATION jobs
  Blueshield: 'Телохранитель',
  Magistrate: 'Главный судья',
  'Nanotrasen Representative': 'Представитель ТСФ',
  // Event jobs
  'Veteran Security Advisor': 'Ветеран советчик СБ',
  'Bridge Assistant': 'Адъютант',
};

const REVERSED_JOBS_RU = Object.entries(JOBS_RU).reduce(
  (reversed_jobs, [key, value]) => {
    reversed_jobs[value] = key;
    return reversed_jobs;
  },
  {},
);

export function ReverseJobsRu(value: string) {
  return REVERSED_JOBS_RU[value] || value;
}

export const DEPARTMENTS_RU = {
  Command: 'Управление',
  'NT Representation': 'Специальные',
  Justice: 'Юридический',
  Security: 'Безопасность',
  Service: 'Обслуживание',
  Cargo: 'Снабжение',
  Science: 'Исследование',
  Medical: 'Медицина',
  Silicon: 'Синтетики',
  Engineering: 'Инженерия',
  'No Department': 'Жители',
};
