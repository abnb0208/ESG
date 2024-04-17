const data_path = path.join(path.app_root(), 'renderer', 'data', 'data.json');


// command
const fs = file.fs;


// doms
const mycontainer = document.querySelector('.mycontainer');
const search_container = document.querySelector('.search-container');
const result_container = document.querySelector('.result-container');
const select_year = document.querySelector('.select-year');
const search_input = document.querySelector('.search-input');
const notfound_alert = document.querySelector('.notfound');
const list_stock_code = document.querySelector('#list-stock-code');
const list_env = document.querySelector('#list-env');
const list_social = document.querySelector('#list-social');
const list_govern = document.querySelector('#list-govern');
const list_date = document.querySelector('#list-date');
const list_score = document.querySelector('#list-score');
const ESG_table_bodey_holder = document.querySelector('#ESG_table_bodey_holder');
const ESG_table_head_holder = document.querySelector('#ESG_table_head_holder');
const table_biaoti = document.querySelector('#table_biaoti');
const export_to_pdf = document.querySelector('#export_to_pdf');

//weight
const weights = {
  "Environmental": 0.48,
  "Social": 0.26,
  "Governance": 0.26
}

// current code ID

var current_stuck_code = '?';

// table_chart result

// years
const all_year = [
  "2011/12/31", "2012/12/31",
  "2013/12/31", "2014/12/31", 
  "2015/12/31", "2016/12/31",
  "2017/12/31", "2018/12/31",
  "2019/12/31", "2020/12/31"
]