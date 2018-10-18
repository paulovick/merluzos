
const LEVELS = {
  1: {
    name: 'Excellent',
    implications: 'No health implications.',
    precautions: 'Everyone can continue their outdoor activities normally.',
    color: '#79bc6a'
  },
  2: {
    name: 'Good',
    implications: 'Some pollutants may slightly affect very few hypersensitive individuals.',
    precautions: 'Only very few hypersensitive people should reduce outdoor activities.',
    color: '#bbcf4c'
  },
  3: {
    name: 'Lightly Polluted',
    implications: 'Healthy people may experience slight irritations and sensitive individuals will be slightly affected to a larger extent.',
    precautions: 'Children, seniors and individuals with respiratory or heart diseases should reduce sustained and high-intensity outdoor exercises.',
    color: '#eec20b'
  },
  4: {
    name: 'Moderately Polluted',
    implications: 'Sensitive individuals will experience more serious conditions. The hearts and respiratory systems of healthy people may be affected.',
    precautions: 'Children, seniors and individuals with respiratory or heart diseases should avoid sustained and high-intensity outdoor exercises. General population should moderately reduce outdoor activities.',
    color: '#f29305'
  },
  5: {
    name: 'Heavily Polluted',
    implications: 'Healthy people will commonly show symptoms. People with respiratory or heart diseases will be significantly affected and will experience reduced endurance in activities.',
    precautions: 'Children, seniors and individuals with heart or lung diseases should stay indoors and avoid outdoor activities. General population should reduce outdoor activities.',
    color: '#e8416f'
  },
  6: {
    name: 'Severely Polluted',
    implications: 'Healthy people will experience reduced endurance in activities and may also show noticeably strong symptoms. Other illnesses may be triggered in healthy people. Elders and the sick should remain indoors and avoid exercise. Healthy individuals should avoid outdoor activities.',
    precautions: 'Children, seniors and the sick should stay indoors and avoid physical exertion. General population should avoid outdoor activities.',
    color: '#795548'
  }
}

export { LEVELS }
