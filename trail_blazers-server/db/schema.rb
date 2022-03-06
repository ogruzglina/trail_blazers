# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_06_233538) do

  create_table "hikers", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "location"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "rating"
    t.string "comment"
    t.integer "hiker_id"
    t.integer "trail_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "trails", force: :cascade do |t|
    t.string "park_name"
    t.string "trail_name"
    t.string "location"
    t.string "difficulty"
    t.integer "duration"
    t.string "attraction"
  end

end
