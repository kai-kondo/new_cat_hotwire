import { Controller } from "@hotwired/stimulus"
// bootstrapのmodel をinport
import {Modal} from "bootstrap"

// Connects to data-controller="modal"
export default class extends Controller {
    // `connect()`はStimulusのライフサイクルコールバックの1つ
    // `connect()`はStimulusのライフサイクルコールバックの1つ
    connect() {
      // モーダルを作成
      this.modal = new Modal(this.element)

      // モーダルを表示する
      this.modal.show()
  }

  // アクションを定義
  // 保存時にモーダルを閉じる
  close(event) {
    // event.detall.succesは、レスポンスが成功ならtrueを返す
    // バリデーションエラー時はモーダルを閉じたくないので成功のみ閉じる
    if (event.detail.success) {
      this.modal.hide()
    }
  }
}
