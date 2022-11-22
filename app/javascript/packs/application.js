// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min'
import '@splidejs/splide/dist/js/splide'
import '@splidejs/splide/dist/css/splide-core.min'
import '@splidejs/splide/dist/css/splide.min'
import '../stylesheets/application'
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require("packs/jquery-3.4.1.min")
require("packs/slide")
require("packs/owl")
Rails.start()
Turbolinks.start()
ActiveStorage.start()
