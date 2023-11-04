export const normalizeAlign = (align: string | undefined = '') => {
    const map = new Map([
        ['justify', 'justifyed'],
        ['center', 'centered']
    ])
      
    return map.get(align) || align;
  }
  
  export const normalizeStatus = (status: string | undefined = '') => {
    const map = new Map([
      ['focus', 'focused'],
      ['hover', 'hovered'],
      ['active', 'active']
    ]);
    return map.get(status) || status;
  };