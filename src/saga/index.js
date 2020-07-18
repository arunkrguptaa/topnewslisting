import { put, takeLatest, all } from "redux-saga/effects";
import { setArticle } from "../action";
const singleList = e =>
  `https://hacker-news.firebaseio.com/v0/item/${e}.json?print=pretty`;
const topList =
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
function* fetchNews() {
  const json = yield fetch(topList).then(response => response.json());
  const reversData = json.reverse().slice(0, 90);

  // let listAll = [];
  const listAll = yield all(
    reversData.map(function*(e) {
      return yield fetch(singleList(e)).then(response => response.json());
    })
  );
  // console.log(listAll);
  yield put(setArticle(listAll));
}
function* actionWatcher() {
  yield takeLatest("GET_ARTICLE", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
