const sortTheColsMrCoder = str => {
  let obj = [];
  let regex = /\r?\n|\r/g;
  let newStr = str.replace(regex, ',').split(',');
  let nums = [];

  for (let i = 0; i < newStr.length; i++) {
    let name = newStr[i];

    if (parseInt(name) !== parseInt(name)) {
      obj.push({ name });
    }
  }
  for (let i = obj.length; i < newStr.length; i += obj.length) {
    let elem = newStr.slice(i, i + obj.length);

    nums.push(elem);
  }

  obj.map((item, idx) => {
    item['val'] = nums.map(num => num[idx]);
  });

  obj = obj.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  let output = '';
  obj.map(item => {
    output += item.name + ',';
  });

  output += '\n';
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    obj.map(item => {
      output += `${item.val[j]},`;
    });
    output += '\n';
    j++;
    i++;
  }
  return output.slice(0, -2);
};

console.log(
  sortTheColsMrCoder(
    'daryl,Andrew,arnold,Yamuna,zayne,Sally\n2465,21789,123636,15241,1987,5296\n12,16,13,14,11,15\n120,160,130,140,110,150\n1200,1600,1300,1400,1100,1500'
  )
);
