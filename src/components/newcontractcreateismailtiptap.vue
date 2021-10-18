
<template>
  <v-container>
    <v-progress-linear
      :value="document.leftSide.linearprogressvalue"
      fixed
      absolute
      style="width: 100vw; margin-top: 3.4em; z-index: 4"
      :color="maincolor.theme"
      background-opacity="0"
    >
    </v-progress-linear>
    <v-layout style="width: 100vw; background-color: #d8d8d8" class="mt-9">
      <v-card
        elevation="0"
        style="min-height: 120vh; width: 100vw; background-color: #d8d8d8"
      >
        <div style="display: flex">
          <div
            style="
              width: 45%;
              background-color: #f6f6f6;
              margin-right: 5px;
              position: relative;
            "
          >
            <v-card
              elevation="0"
              :color="maincolor.bar"
              style="min-height: 200vh"
            >
              <div
                style="
                  height: 1vh;
                  min-height: 1vh;
                  margin-left: 20px;
                  width: 85%;
                  margin-bottom: 25px;
                "
              ></div>
              <v-expansion-panels
                v-model="opened_pannal"
                class="ml-n3"
                flat
                accordion
              >
                <draggable
                  :list="document.leftSide.card"
                  class="list-group"
                  @start="drag_functionstart()"
                  @end="drag_function()"
                >
                  <div
                    class="list-group-item"
                    style="display: flex"
                    v-for="item in document.leftSide.card"
                    :key="item.id"
                  >
                    <v-icon class="mr-1 mt-n3">mdi-drag</v-icon>

                    <!-- 1st pannal -->
                    <v-card
                      min-height="1"
                      color="transparent"
                      rounded="lg"
                      elevation="0"
                    >
                      <v-expansion-panel style="width: 41vw" class="mt-3 mb-7">
                        <v-expansion-panel-header
                          expand-icon=""
                          @click="disable_and_enable_properties(item)"
                        >
                          <div style="display: flex" class="">
                            <div
                              class="pl-2 pt-4"
                              @mouseenter="hoveritem2 = item"
                              @mouseleave="hoveritem2 = null"
                            >
                              <v-icon
                                v-if="
                                  hoveritem2 !== item &&
                                  item.isactive === false &&
                                  item.isedited === false
                                "
                                color="#d8d8d8"
                                style="font-size: 10px"
                                @click="getvalue()"
                                >mdi-checkbox-blank-circle</v-icon
                              >
                              <v-icon
                                v-if="
                                  hoveritem2 !== item &&
                                  item.isactive === true &&
                                  item.isedited === false
                                "
                                :color="maincolor.theme"
                                style="font-size: 10px"
                                @click="getvalue()"
                                >mdi-checkbox-blank-circle</v-icon
                              >
                              <v-icon
                                v-if="
                                  hoveritem2 !== item &&
                                  item.isactive === false &&
                                  item.isedited === true
                                "
                                :color="maincolor.theme"
                                size="18"
                                @click="getvalue()"
                                >mdi-pencil-outline</v-icon
                              >
                              <v-icon
                                v-if="
                                  hoveritem2 !== item &&
                                  item.isactive === true &&
                                  item.isedited === true
                                "
                                :color="maincolor.theme"
                                size="18"
                                @click="getvalue()"
                                >mdi-pencil-outline</v-icon
                              >
                              <v-list dense height="1">
                                <v-list-item
                                  v-for="color in ['transparent']"
                                  :key="color"
                                  v-ripple="{ class: `${color}--text` }"
                                >
                                  <div @click.stop="onClick()">
                                    <v-icon
                                      v-if="hoveritem2 === item"
                                      color="#FF0000"
                                      size="20"
                                      class="mt-n5"
                                      @click="delete_card(item)"
                                      >mdi-close-circle-outline</v-icon
                                    >
                                  </div>
                                </v-list-item>
                              </v-list>
                            </div>
                            <v-spacer></v-spacer>
                            <v-list
                              v-if="!item.name_edit"
                              class="mb-n3 mt-1 pt-2 pb-1"
                              style="background-color: transparent"
                            >
                              <v-list-item
                                v-for="color in ['transparent']"
                                :key="color"
                                v-ripple="{ class: `${color}--text` }"
                              >
                                <p
                                  class=""
                                  @click.stop="onClick()"
                                  v-on:dblclick="taptapeditorheadingleft(item)"
                                  :inner-html.prop="item.name"
                                ></p>
                              </v-list-item>
                            </v-list>
                            <v-list v-if="item.name_edit">
                              <v-list-item
                                v-for="color in ['transparent']"
                                :key="color"
                                v-ripple="{ class: `${color}--text` }"
                              >
                                <div
                                  class="pt-10 pb-3 mr-5"
                                  @click.stop="onClick()"
                                  v-click-outside="onClickOutside3"
                                >
                                  <!-- <tiptap-vuetify
                             
                                  spellcheck="false"
                                  v-model="item.name"
                                  :extensions="extensions"
                                >
   </tiptap-vuetify> -->
                                  <v-card>
                                    <div class="editor">
                                      <editor-menu-bar
                                        style="background-color: #f5f5f5"
                                        v-slot="{ commands, isActive }"
                                        :editor="editor1"
                                      >
                                        <div class="menubar">
                                          <span
                                            v-for="actionName in activeButtons"
                                            :key="actionName"
                                          >
                                            <v-btn
                                              icon
                                              v-if="actionName === 'undo'"
                                              class="menubar__button"
                                              @click="commands.undo"
                                            >
                                              <v-icon>mdi-undo</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'redo'"
                                              class="menubar__button"
                                              @click="commands.redo"
                                            >
                                              <v-icon>mdi-redo</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'paragraph'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.paragraph(),
                                              }"
                                              @click="commands.paragraph"
                                            >
                                              <v-icon
                                                >mdi-format-paragraph</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'h1'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 1,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 1 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-1</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h2'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 2,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 2 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-2</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h3'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 3,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 3 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-3</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'blockquote'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.blockquote(),
                                              }"
                                              @click="commands.blockquote"
                                            >
                                              <v-icon
                                                >mdi-format-quote-close</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'underline'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.underline(),
                                              }"
                                              @click="commands.underline"
                                            >
                                              <v-icon
                                                >mdi-format-underline</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'strike'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.strike(),
                                              }"
                                              @click="commands.strike"
                                            >
                                              <v-icon
                                                >mdi-format-strikethrough</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'italic'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.italic(),
                                              }"
                                              @click="commands.italic"
                                            >
                                              <v-icon>mdi-format-italic</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'bold'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.bold(),
                                              }"
                                              @click="commands.bold"
                                            >
                                              <v-icon>mdi-format-bold</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'code'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.code(),
                                              }"
                                              @click="commands.code"
                                            >
                                              <v-icon>mdi-code-tags</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'horizontal_rule'
                                              "
                                              class="menubar__button"
                                              @click="commands.horizontal_rule"
                                            >
                                              <v-icon>mdi-minus</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'bullet_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.bullet_list(),
                                              }"
                                              @click="commands.bullet_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-bulleted</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'ordered_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.ordered_list(),
                                              }"
                                              @click="commands.ordered_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-numbered</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'list_check'"
                                            >
                                              <v-icon
                                                >mdi-format-list-checks</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="
                                                actionName ===
                                                'signature_freehand'
                                              "
                                            >
                                              <v-icon
                                                >mdi-signature-freehand</v-icon
                                              >
                                            </v-btn>

                                            <!-- <button
            v-if="actionName === 'link'"
            class="menubar__button"
            :class="{ 'is-active': isActive.link() }"
            @click="commands.code_block"
          >
           <v-icon>mdi-link</v-icon>
          </button> -->

                                            <!-- <button
            v-if="actionName === 'code_block'"
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </button> -->
                                          </span>
                                        </div>
                                      </editor-menu-bar>
                                      <editor-content
                                        class="editor__content ml-2 mt-3 mr-2"
                                        :editor="editor1"
                                      />
                                    </div>
                                  </v-card>
                                </div>
                                <!-- :toolbar-attributes="{ color: 'yellow' }"
                              :card-props="{ flat: true, color: '#26c6da' }" -->
                              </v-list-item>
                            </v-list>
                            <v-spacer></v-spacer>
                            <!-- <strong  @dblclick="taptapeditoractivateleft(item)">{{item.name | truncateEnd(36)}}</strong> -->
                            <div
                              style="
                                position: absolute;
                                right: 15px;
                                top: 13px;
                                cursor: pointer;
                              "
                              v-if="hoveritem2 === item"
                            >
                              <v-chip
                                class=""
                                color="#CF3618"
                                style="width: 7em; height: 1.8em"
                                small
                              >
                                <p
                                  class="pt-4 pl-8"
                                  style="color: white"
                                  v-if="item.total_fields < 9"
                                >
                                  {{ item.completed_fields }} /
                                  {{ item.total_fields }}
                                </p>
                                <p
                                  class="pt-4 pl-8"
                                  style="color: white"
                                  v-if="item.total_fields > 9"
                                >
                                  {{ item.completed_fields }} /{{
                                    item.total_fields
                                  }}
                                </p>
                              </v-chip>
                            </div>
                          </div>
                          <div
                            style="
                              position: absolute;
                              right: 15px;
                              top: 13px;
                              cursor: pointer;
                            "
                            v-if="
                              item.completed_fields === 0 && hoveritem2 !== item
                            "
                          >
                            <v-chip
                              class=""
                              color="#606060"
                              style="width: 7em; height: 1.8em"
                              small
                            >
                              <p
                                class="pt-4 pl-8"
                                style="color: white"
                                v-if="item.total_fields < 9"
                              >
                                {{ item.completed_fields }} /
                                {{ item.total_fields }}
                              </p>
                              <p
                                class="pt-4 pl-8"
                                style="color: white"
                                v-if="item.total_fields > 9"
                              >
                                {{ item.completed_fields }} /{{
                                  item.total_fields
                                }}
                              </p>
                            </v-chip>
                          </div>
                          <div
                            style="
                              position: absolute;
                              right: 15px;
                              top: 13px;
                              cursor: pointer;
                            "
                            v-if="
                              item.completed_fields !== 0 && hoveritem2 !== item
                            "
                          >
                            <v-chip
                              class=""
                              :color="maincolor.theme"
                              style="width: 7em; height: 1.8em"
                              small
                            >
                              <p
                                class="pt-4 pl-8"
                                style="color: white"
                                v-if="item.total_fields < 9"
                              >
                                {{ item.completed_fields }} /
                                {{ item.total_fields }}
                              </p>
                              <p
                                class="pt-4 pl-8"
                                style="color: white"
                                v-if="item.total_fields > 9"
                              >
                                {{ item.completed_fields }} /{{
                                  item.total_fields
                                }}
                              </p>
                            </v-chip>
                          </div>
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                          <div
                            style=""
                            class=""
                            v-for="(item1, j) in item.section"
                            :key="j"
                          >
                            <!-- :inner-html.prop="item1.statement" -->
                            <div v-if="edit" style="word-break: break-word">
                              <p
                                v-click-outside="onClickOutside"
                                v-if="item1.tiptapedit"
                                v-on:dblclick="taptapeditoractivateleftitem1(item1)"
                                style="word-break: break-word"
                              >
                                <!-- <tiptap-vuetify
                                  spellcheck="false"
                                  v-model="item1.statement"
                                  :extensions="extensions"
                                /> -->
                                <v-card >
                                    <div class="editor">
                                      <editor-menu-bar
                                        style="background-color: #f5f5f5"
                                        v-slot="{ commands, isActive }"
                                        :editor="editor1"
                                      >
                                        <div class="menubar">
                                          <span
                                            v-for="actionName in activeButtons"
                                            :key="actionName"
                                          >
                                            <v-btn
                                              icon
                                              v-if="actionName === 'undo'"
                                              class="menubar__button"
                                              @click="commands.undo"
                                            >
                                              <v-icon>mdi-undo</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'redo'"
                                              class="menubar__button"
                                              @click="commands.redo"
                                            >
                                              <v-icon>mdi-redo</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'paragraph'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.paragraph(),
                                              }"
                                              @click="commands.paragraph"
                                            >
                                              <v-icon
                                                >mdi-format-paragraph</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'h1'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 1,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 1 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-1</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h2'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 2,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 2 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-2</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h3'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 3,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 3 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-3</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'blockquote'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.blockquote(),
                                              }"
                                              @click="commands.blockquote"
                                            >
                                              <v-icon
                                                >mdi-format-quote-close</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'underline'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.underline(),
                                              }"
                                              @click="commands.underline"
                                            >
                                              <v-icon
                                                >mdi-format-underline</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'strike'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.strike(),
                                              }"
                                              @click="commands.strike"
                                            >
                                              <v-icon
                                                >mdi-format-strikethrough</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'italic'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.italic(),
                                              }"
                                              @click="commands.italic"
                                            >
                                              <v-icon>mdi-format-italic</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'bold'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.bold(),
                                              }"
                                              @click="commands.bold"
                                            >
                                              <v-icon>mdi-format-bold</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'code'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.code(),
                                              }"
                                              @click="commands.code"
                                            >
                                              <v-icon>mdi-code-tags</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'horizontal_rule'
                                              "
                                              class="menubar__button"
                                              @click="commands.horizontal_rule"
                                            >
                                              <v-icon>mdi-minus</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'bullet_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.bullet_list(),
                                              }"
                                              @click="commands.bullet_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-bulleted</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'ordered_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.ordered_list(),
                                              }"
                                              @click="commands.ordered_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-numbered</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'list_check'"
                                            >
                                              <v-icon
                                                >mdi-format-list-checks</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="
                                                actionName ===
                                                'signature_freehand'
                                              "
                                            >
                                              <v-icon
                                                >mdi-signature-freehand</v-icon
                                              >
                                            </v-btn>

                                            <!-- <button
            v-if="actionName === 'link'"
            class="menubar__button"
            :class="{ 'is-active': isActive.link() }"
            @click="commands.code_block"
          >
           <v-icon>mdi-link</v-icon>
          </button> -->

                                            <!-- <button
            v-if="actionName === 'code_block'"
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </button> -->
                                          </span>
                                        </div>
                                      </editor-menu-bar>
                                      <editor-content
                                        class="editor__content ml-2 mt-3 mr-2"
                                        :editor="editor1"
                                      />
                                    </div>
                                  </v-card>
                              </p>

                              <p
                                v-if="!item1.tiptapedit"
                                v-on:dblclick="taptapeditoractivateleftitem1(item1)"
                                style="word-break: break-word"
                                :inner-html.prop="item1.statement"
                              ></p>
                            </div>
                            <p
                              v-if="!edit"
                              style="word-break: break-word"
                              :inner-html.prop="item1.statement"
                            ></p>
                            <div class="row" v-if="item1.type === 'textfield'">
                              <div
                                style=""
                                :class="item2.size"
                                v-for="(item2, k) in item1.fields"
                                :key="k"
                              >
                                <v-text-field
                                  rounded
                                  dense
                                  clearable
                                  :color="maincolor.theme"
                                  outlined
                                  :label="item2.line"
                                  v-model="item2.value"
                                >
                                </v-text-field>
                              </div>
                            </div>
                            <div class="row" v-if="item1.type === 'dropselect'">
                              <div style="" class="col-12">
                                <v-select
                                  v-model="item1.value"
                                  :items="item1.choices"
                                  return-object
                                  item-text="value"
                                  item-value="id"
                                  dense
                                  class="mb-3"
                                  outlined
                                  rounded
                                  :menu-props="{ bottom: true, offsetY: true }"
                                  :color="maincolor.theme"
                                ></v-select>
                                <div v-if="item1.dropselect_display === true">
                                  <div
                                    style=""
                                    class="col-12"
                                    v-for="(item3, l) in item1.dropselect"
                                    :key="l"
                                  >
                                    <div
                                      v-if="
                                        item3.on_which_to_show === item1.value
                                      "
                                    >
                                      <div
                                        v-if="edit"
                                        style="word-break: break-word"
                                      >
                                        <p
                                          v-click-outside="onClickOutside"
                                          v-if="item3.tiptapedit"
                                          v-on:dblclick="
                                            taptapeditoractivateleft(item3)
                                          "
                                          style="word-break: break-word"
                                        >
                                          <!-- <tiptap-vuetify
                                            spellcheck="false"
                                            v-model="item3.statement"
                                            :extensions="extensions"
                                          /> -->
                                          <v-card>
                                    <div class="editor">
                                      <editor-menu-bar
                                        style="background-color: #f5f5f5"
                                        v-slot="{ commands, isActive }"
                                        :editor="editor1"
                                      >
                                        <div class="menubar">
                                          <span
                                            v-for="actionName in activeButtons"
                                            :key="actionName"
                                          >
                                            <v-btn
                                              icon
                                              v-if="actionName === 'undo'"
                                              class="menubar__button"
                                              @click="commands.undo"
                                            >
                                              <v-icon>mdi-undo</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'redo'"
                                              class="menubar__button"
                                              @click="commands.redo"
                                            >
                                              <v-icon>mdi-redo</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'paragraph'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.paragraph(),
                                              }"
                                              @click="commands.paragraph"
                                            >
                                              <v-icon
                                                >mdi-format-paragraph</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'h1'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 1,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 1 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-1</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h2'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 2,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 2 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-2</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h3'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 3,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 3 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-3</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'blockquote'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.blockquote(),
                                              }"
                                              @click="commands.blockquote"
                                            >
                                              <v-icon
                                                >mdi-format-quote-close</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'underline'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.underline(),
                                              }"
                                              @click="commands.underline"
                                            >
                                              <v-icon
                                                >mdi-format-underline</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'strike'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.strike(),
                                              }"
                                              @click="commands.strike"
                                            >
                                              <v-icon
                                                >mdi-format-strikethrough</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'italic'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.italic(),
                                              }"
                                              @click="commands.italic"
                                            >
                                              <v-icon>mdi-format-italic</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'bold'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.bold(),
                                              }"
                                              @click="commands.bold"
                                            >
                                              <v-icon>mdi-format-bold</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'code'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.code(),
                                              }"
                                              @click="commands.code"
                                            >
                                              <v-icon>mdi-code-tags</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'horizontal_rule'
                                              "
                                              class="menubar__button"
                                              @click="commands.horizontal_rule"
                                            >
                                              <v-icon>mdi-minus</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'bullet_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.bullet_list(),
                                              }"
                                              @click="commands.bullet_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-bulleted</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'ordered_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.ordered_list(),
                                              }"
                                              @click="commands.ordered_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-numbered</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'list_check'"
                                            >
                                              <v-icon
                                                >mdi-format-list-checks</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="
                                                actionName ===
                                                'signature_freehand'
                                              "
                                            >
                                              <v-icon
                                                >mdi-signature-freehand</v-icon
                                              >
                                            </v-btn>

                                            <!-- <button
            v-if="actionName === 'link'"
            class="menubar__button"
            :class="{ 'is-active': isActive.link() }"
            @click="commands.code_block"
          >
           <v-icon>mdi-link</v-icon>
          </button> -->

                                            <!-- <button
            v-if="actionName === 'code_block'"
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </button> -->
                                          </span>
                                        </div>
                                      </editor-menu-bar>
                                      <editor-content
                                        class="editor__content ml-2 mt-3 mr-2"
                                        :editor="editor1"
                                      />
                                    </div>
                                  </v-card>
                                        </p>
                                        <p
                                          v-if="!item3.tiptapedit"
                                          v-on:dblclick="
                                            taptapeditoractivateleft(item3)
                                          "
                                          style="word-break: break-word"
                                          :inner-html.prop="item3.statement"
                                        ></p>
                                      </div>
                                      <p
                                        v-if="!edit"
                                        style="word-break: break-word"
                                        :inner-html.prop="item3.statement"
                                      ></p>
                                      <v-select
                                        v-model="item3.value"
                                        :items="item3.choices"
                                        return-object
                                        item-text="value"
                                        item-value="id"
                                        dense
                                        class="mb-3"
                                        outlined
                                        rounded
                                        :menu-props="{
                                          bottom: true,
                                          offsetY: true,
                                        }"
                                        :color="maincolor.theme"
                                      ></v-select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="" v-if="item1.type === 'radio'">
                              <v-radio-group class="" v-model="item1.value">
                                <div
                                  style=""
                                  class=""
                                  v-for="(item2, k) in item1.fields"
                                  :key="k"
                                >
                                  <div v-if="edit">
                                    <p
                                      v-if="item2.tiptapedit"
                                      v-click-outside="onClickOutside"
                                      v-on:dblclick="
                                        taptapeditoractivateleftitem2(item2)
                                      "
                                    >
                                      <!-- <tiptap-vuetify
                                        spellcheck="false"
                                        v-model="item2.line"
                                        :extensions="extensions"
                                      /> -->
                                      <v-card>
                                    <div class="editor">
                                      <editor-menu-bar
                                        style="background-color: #f5f5f5"
                                        v-slot="{ commands, isActive }"
                                        :editor="editor1"
                                      >
                                        <div class="menubar">
                                          <span
                                            v-for="actionName in activeButtons"
                                            :key="actionName"
                                          >
                                            <v-btn
                                              icon
                                              v-if="actionName === 'undo'"
                                              class="menubar__button"
                                              @click="commands.undo"
                                            >
                                              <v-icon>mdi-undo</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'redo'"
                                              class="menubar__button"
                                              @click="commands.redo"
                                            >
                                              <v-icon>mdi-redo</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'paragraph'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.paragraph(),
                                              }"
                                              @click="commands.paragraph"
                                            >
                                              <v-icon
                                                >mdi-format-paragraph</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'h1'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 1,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 1 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-1</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h2'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 2,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 2 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-2</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h3'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 3,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 3 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-3</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'blockquote'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.blockquote(),
                                              }"
                                              @click="commands.blockquote"
                                            >
                                              <v-icon
                                                >mdi-format-quote-close</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'underline'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.underline(),
                                              }"
                                              @click="commands.underline"
                                            >
                                              <v-icon
                                                >mdi-format-underline</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'strike'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.strike(),
                                              }"
                                              @click="commands.strike"
                                            >
                                              <v-icon
                                                >mdi-format-strikethrough</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'italic'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.italic(),
                                              }"
                                              @click="commands.italic"
                                            >
                                              <v-icon>mdi-format-italic</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'bold'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.bold(),
                                              }"
                                              @click="commands.bold"
                                            >
                                              <v-icon>mdi-format-bold</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'code'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.code(),
                                              }"
                                              @click="commands.code"
                                            >
                                              <v-icon>mdi-code-tags</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'horizontal_rule'
                                              "
                                              class="menubar__button"
                                              @click="commands.horizontal_rule"
                                            >
                                              <v-icon>mdi-minus</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'bullet_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.bullet_list(),
                                              }"
                                              @click="commands.bullet_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-bulleted</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'ordered_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.ordered_list(),
                                              }"
                                              @click="commands.ordered_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-numbered</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'list_check'"
                                            >
                                              <v-icon
                                                >mdi-format-list-checks</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="
                                                actionName ===
                                                'signature_freehand'
                                              "
                                            >
                                              <v-icon
                                                >mdi-signature-freehand</v-icon
                                              >
                                            </v-btn>

                                            <!-- <button
            v-if="actionName === 'link'"
            class="menubar__button"
            :class="{ 'is-active': isActive.link() }"
            @click="commands.code_block"
          >
           <v-icon>mdi-link</v-icon>
          </button> -->

                                            <!-- <button
            v-if="actionName === 'code_block'"
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </button> -->
                                          </span>
                                        </div>
                                      </editor-menu-bar>
                                      <editor-content
                                        class="editor__content ml-2 mt-3 mr-2"
                                        :editor="editor1"
                                      />
                                    </div>
                                  </v-card>
                                    </p>
                                    <div v-if="!item2.tiptapedit">
                                      <v-radio
                                        :color="maincolor.theme"
                                        class="mt-2"
                                        :rules="rules"
                                        :value="item2.value"
                                      >
                                        <template v-slot:label>
                                          <li
                                            v-on:dblclick="
                                              taptapeditoractivateleftitem2(item2)
                                            "
                                            :inner-html.prop="
                                              item2.line | truncateEnd(36)
                                            "
                                          ></li> </template
                                      ></v-radio>
                                    </div>
                                  </div>
                                  <div v-if="!edit">
                                    <v-radio
                                      :color="maincolor.theme"
                                      class=""
                                      :rules="rules"
                                      :value="item2.value"
                                    >
                                      <template v-slot:label>
                                        <!-- <li>Of course it's <strong class="success--text">Google</strong></li> -->
                                        <li
                                          :inner-html.prop="
                                            item2.line | truncateEnd(36)
                                          "
                                        ></li> </template
                                    ></v-radio>
                                  </div>
                                </div>
                              </v-radio-group>
                              <div v-if="item1.textfieldapproval === true">
                                <div
                                  style=""
                                  class="col-12"
                                  v-for="(
                                    item3, l
                                  ) in item1.textfieldapprovalfields"
                                  :key="l"
                                >
                                  <div
                                    v-if="
                                      item3.on_which_to_show === item1.value
                                    "
                                  >
                                    <div
                                      v-if="edit"
                                      style="word-break: break-word"
                                    >
                                      <p
                                        v-if="item3.tiptapedit"
                                        v-on:dblclick="
                                          taptapeditoractivateleftitem3(item3)
                                        "
                                        v-click-outside="onClickOutside"
                                        style="word-break: break-word"
                                      >
                                        <!-- <tiptap-vuetify
                                          spellcheck="false"
                                          v-model="item3.statement"
                                          :extensions="extensions"
                                        /> -->
                                         <v-card>
                                    <div class="editor">
                                      <editor-menu-bar
                                        style="background-color: #f5f5f5"
                                        v-slot="{ commands, isActive }"
                                        :editor="editor1"
                                      >
                                        <div class="menubar">
                                          <span
                                            v-for="actionName in activeButtons"
                                            :key="actionName"
                                          >
                                            <v-btn
                                              icon
                                              v-if="actionName === 'undo'"
                                              class="menubar__button"
                                              @click="commands.undo"
                                            >
                                              <v-icon>mdi-undo</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'redo'"
                                              class="menubar__button"
                                              @click="commands.redo"
                                            >
                                              <v-icon>mdi-redo</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'paragraph'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.paragraph(),
                                              }"
                                              @click="commands.paragraph"
                                            >
                                              <v-icon
                                                >mdi-format-paragraph</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'h1'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 1,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 1 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-1</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h2'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 2,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 2 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-2</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h3'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 3,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 3 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-3</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'blockquote'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.blockquote(),
                                              }"
                                              @click="commands.blockquote"
                                            >
                                              <v-icon
                                                >mdi-format-quote-close</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'underline'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.underline(),
                                              }"
                                              @click="commands.underline"
                                            >
                                              <v-icon
                                                >mdi-format-underline</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'strike'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.strike(),
                                              }"
                                              @click="commands.strike"
                                            >
                                              <v-icon
                                                >mdi-format-strikethrough</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'italic'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.italic(),
                                              }"
                                              @click="commands.italic"
                                            >
                                              <v-icon>mdi-format-italic</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'bold'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.bold(),
                                              }"
                                              @click="commands.bold"
                                            >
                                              <v-icon>mdi-format-bold</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'code'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.code(),
                                              }"
                                              @click="commands.code"
                                            >
                                              <v-icon>mdi-code-tags</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'horizontal_rule'
                                              "
                                              class="menubar__button"
                                              @click="commands.horizontal_rule"
                                            >
                                              <v-icon>mdi-minus</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'bullet_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.bullet_list(),
                                              }"
                                              @click="commands.bullet_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-bulleted</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'ordered_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.ordered_list(),
                                              }"
                                              @click="commands.ordered_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-numbered</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'list_check'"
                                            >
                                              <v-icon
                                                >mdi-format-list-checks</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="
                                                actionName ===
                                                'signature_freehand'
                                              "
                                            >
                                              <v-icon
                                                >mdi-signature-freehand</v-icon
                                              >
                                            </v-btn>

                                            <!-- <button
            v-if="actionName === 'link'"
            class="menubar__button"
            :class="{ 'is-active': isActive.link() }"
            @click="commands.code_block"
          >
           <v-icon>mdi-link</v-icon>
          </button> -->

                                            <!-- <button
            v-if="actionName === 'code_block'"
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </button> -->
                                          </span>
                                        </div>
                                      </editor-menu-bar>
                                      <editor-content
                                        class="editor__content ml-2 mt-3 mr-2"
                                        :editor="editor1"
                                      />
                                    </div>
                                  </v-card>
                                      </p>
                                      <p
                                        v-if="!item3.tiptapedit"
                                        v-on:dblclick="
                                          taptapeditoractivateleftitem3(item3)
                                        "
                                        style="word-break: break-word"
                                        :inner-html.prop="item3.statement"
                                      ></p>
                                    </div>
                                    <p
                                      v-if="!edit"
                                      style="word-break: break-word"
                                      :inner-html.prop="item3.statement"
                                    ></p>

                                    <v-text-field
                                      rounded
                                      dense
                                      clearable
                                      :color="maincolor.theme"
                                      outlined
                                      :label="item3.line"
                                      v-model="item3.value"
                                    >
                                    </v-text-field>
                                  </div>
                                </div>
                              </div>

                              <div v-if="item1.dropselect_display === true">
                                <div
                                  style=""
                                  class="col-12"
                                  v-for="(item3, l) in item1.dropselect"
                                  :key="l"
                                >
                                  <div
                                    v-if="
                                      item3.on_which_to_show === item1.value
                                    "
                                  >
                                    <!-- <div  v-if="edit" style="word-break: break-word">
                          <p  v-if="item3.tiptapedit"  v-on:dblclick="taptapeditoractivateleft(item3)" style="word-break: break-word">
                            <tiptap-vuetify
                            v-model="item3.statement"
                            :extensions="extensions"
                        />
                          </p>
                          <p  v-if="!item3.tiptapedit"  v-on:dblclick="taptapeditoractivateleft(item3)" style="word-break: break-word" :inner-html.prop="item3.statement"></p>
                        </div>
                                <p v-if="!edit" style="word-break: break-word" :inner-html.prop="item3.statement"></p> -->
                                    <div v-if="edit">
                                      <p
                                        v-if="item3.tiptapedit"
                                        v-click-outside="onClickOutside"
                                        v-on:dblclick="
                                          taptapeditoractivateleftitem4(item3)
                                        "
                                      >
                                        <!-- <tiptap-vuetify
                                          spellcheck="false"
                                          v-model="item3.statement"
                                          :extensions="extensions"
                                        /> -->
                                        <v-card>
                                    <div class="editor">
                                      <editor-menu-bar
                                        style="background-color: #f5f5f5"
                                        v-slot="{ commands, isActive }"
                                        :editor="editor1"
                                      >
                                        <div class="menubar">
                                          <span
                                            v-for="actionName in activeButtons"
                                            :key="actionName"
                                          >
                                            <v-btn
                                              icon
                                              v-if="actionName === 'undo'"
                                              class="menubar__button"
                                              @click="commands.undo"
                                            >
                                              <v-icon>mdi-undo</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'redo'"
                                              class="menubar__button"
                                              @click="commands.redo"
                                            >
                                              <v-icon>mdi-redo</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'paragraph'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.paragraph(),
                                              }"
                                              @click="commands.paragraph"
                                            >
                                              <v-icon
                                                >mdi-format-paragraph</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'h1'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 1,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 1 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-1</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h2'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 2,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 2 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-2</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h3'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 3,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 3 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-3</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'blockquote'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.blockquote(),
                                              }"
                                              @click="commands.blockquote"
                                            >
                                              <v-icon
                                                >mdi-format-quote-close</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'underline'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.underline(),
                                              }"
                                              @click="commands.underline"
                                            >
                                              <v-icon
                                                >mdi-format-underline</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'strike'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.strike(),
                                              }"
                                              @click="commands.strike"
                                            >
                                              <v-icon
                                                >mdi-format-strikethrough</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'italic'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.italic(),
                                              }"
                                              @click="commands.italic"
                                            >
                                              <v-icon>mdi-format-italic</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'bold'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.bold(),
                                              }"
                                              @click="commands.bold"
                                            >
                                              <v-icon>mdi-format-bold</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'code'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.code(),
                                              }"
                                              @click="commands.code"
                                            >
                                              <v-icon>mdi-code-tags</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'horizontal_rule'
                                              "
                                              class="menubar__button"
                                              @click="commands.horizontal_rule"
                                            >
                                              <v-icon>mdi-minus</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'bullet_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.bullet_list(),
                                              }"
                                              @click="commands.bullet_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-bulleted</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'ordered_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.ordered_list(),
                                              }"
                                              @click="commands.ordered_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-numbered</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'list_check'"
                                            >
                                              <v-icon
                                                >mdi-format-list-checks</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="
                                                actionName ===
                                                'signature_freehand'
                                              "
                                            >
                                              <v-icon
                                                >mdi-signature-freehand</v-icon
                                              >
                                            </v-btn>

                                            <!-- <button
            v-if="actionName === 'link'"
            class="menubar__button"
            :class="{ 'is-active': isActive.link() }"
            @click="commands.code_block"
          >
           <v-icon>mdi-link</v-icon>
          </button> -->

                                            <!-- <button
            v-if="actionName === 'code_block'"
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </button> -->
                                          </span>
                                        </div>
                                      </editor-menu-bar>
                                      <editor-content
                                        class="editor__content ml-2 mt-3 mr-2"
                                        :editor="editor1"
                                      />
                                    </div>
                                  </v-card>
                                      </p>
                                      <p
                                        v-if="!item3.tiptapedit"
                                        style="word-break: break-word"
                                        :inner-html.prop="item3.statement"
                                        v-on:dblclick="
                                          taptapeditoractivateleftitem4(item3)
                                        "
                                      ></p>
                                    </div>
                                    <p
                                      v-if="!edit"
                                      style="word-break: break-word"
                                      :inner-html.prop="item3.statement"
                                    ></p>
                                    <v-select
                                      v-model="item3.value"
                                      :items="item3.choices"
                                      return-object
                                      item-text="value"
                                      item-value="id"
                                      dense
                                      class="mb-3"
                                      outlined
                                      rounded
                                      :menu-props="{
                                        bottom: true,
                                        offsetY: true,
                                      }"
                                      :color="maincolor.theme"
                                    ></v-select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row" v-if="item1.type === 'checkbox'">
                              <div
                                style=""
                                class="col-12"
                                v-for="(item2, k) in item1.fields"
                                :key="k"
                              >
                                <div v-if="edit">
                                  <p
                                    v-if="item2.tiptapedit"
                                    v-click-outside="onClickOutside"
                                    v-on:dblclick="
                                      taptapeditoractivateleftitem5(item2)
                                    "
                                  >
                                    <!-- <tiptap-vuetify
                                      spellcheck="false"
                                      v-model="item2.line"
                                      :extensions="extensions"
                                    /> -->
                                    <v-card>
                                    <div class="editor">
                                      <editor-menu-bar
                                        style="background-color: #f5f5f5"
                                        v-slot="{ commands, isActive }"
                                        :editor="editor1"
                                      >
                                        <div class="menubar">
                                          <span
                                            v-for="actionName in activeButtons"
                                            :key="actionName"
                                          >
                                            <v-btn
                                              icon
                                              v-if="actionName === 'undo'"
                                              class="menubar__button"
                                              @click="commands.undo"
                                            >
                                              <v-icon>mdi-undo</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'redo'"
                                              class="menubar__button"
                                              @click="commands.redo"
                                            >
                                              <v-icon>mdi-redo</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'paragraph'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.paragraph(),
                                              }"
                                              @click="commands.paragraph"
                                            >
                                              <v-icon
                                                >mdi-format-paragraph</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'h1'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 1,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 1 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-1</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h2'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 2,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 2 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-2</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'h3'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.heading({
                                                  level: 3,
                                                }),
                                              }"
                                              @click="
                                                commands.heading({ level: 3 })
                                              "
                                            >
                                              <v-icon
                                                >mdi-format-header-3</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'blockquote'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.blockquote(),
                                              }"
                                              @click="commands.blockquote"
                                            >
                                              <v-icon
                                                >mdi-format-quote-close</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'underline'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.underline(),
                                              }"
                                              @click="commands.underline"
                                            >
                                              <v-icon
                                                >mdi-format-underline</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'strike'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.strike(),
                                              }"
                                              @click="commands.strike"
                                            >
                                              <v-icon
                                                >mdi-format-strikethrough</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'italic'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.italic(),
                                              }"
                                              @click="commands.italic"
                                            >
                                              <v-icon>mdi-format-italic</v-icon>
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'bold'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.bold(),
                                              }"
                                              @click="commands.bold"
                                            >
                                              <v-icon>mdi-format-bold</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="actionName === 'code'"
                                              class="menubar__button"
                                              :class="{
                                                'is-active': isActive.code(),
                                              }"
                                              @click="commands.code"
                                            >
                                              <v-icon>mdi-code-tags</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'horizontal_rule'
                                              "
                                              class="menubar__button"
                                              @click="commands.horizontal_rule"
                                            >
                                              <v-icon>mdi-minus</v-icon>
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'bullet_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.bullet_list(),
                                              }"
                                              @click="commands.bullet_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-bulleted</v-icon
                                              >
                                            </v-btn>

                                            <v-btn
                                              icon
                                              v-if="
                                                actionName === 'ordered_list'
                                              "
                                              class="menubar__button"
                                              :class="{
                                                'is-active':
                                                  isActive.ordered_list(),
                                              }"
                                              @click="commands.ordered_list"
                                            >
                                              <v-icon
                                                >mdi-format-list-numbered</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="actionName === 'list_check'"
                                            >
                                              <v-icon
                                                >mdi-format-list-checks</v-icon
                                              >
                                            </v-btn>
                                            <v-btn
                                              icon
                                              v-if="
                                                actionName ===
                                                'signature_freehand'
                                              "
                                            >
                                              <v-icon
                                                >mdi-signature-freehand</v-icon
                                              >
                                            </v-btn>

                                            <!-- <button
            v-if="actionName === 'link'"
            class="menubar__button"
            :class="{ 'is-active': isActive.link() }"
            @click="commands.code_block"
          >
           <v-icon>mdi-link</v-icon>
          </button> -->

                                            <!-- <button
            v-if="actionName === 'code_block'"
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </button> -->
                                          </span>
                                        </div>
                                      </editor-menu-bar>
                                      <editor-content
                                        class="editor__content ml-2 mt-3 mr-2"
                                        :editor="editor1"
                                      />
                                    </div>
                                  </v-card>
                                  </p>
                                  <div v-if="!item2.tiptapedit">
                                    <div class="row">
                                      <v-icon class="mt-n4"
                                        >mdi-checkbox-blank-outline</v-icon
                                      >
                                      <p
                                        class="pl-2"
                                        v-on:dblclick="
                                          taptapeditoractivateleftitem5(item2)
                                        "
                                        :inner-html.prop="
                                          item2.line | truncateEnd(36)
                                        "
                                      ></p>
                                    </div>
                                    <!-- <v-radio
                                      :color="maincolor.theme"
                                      class=""
                                      :rules="rules"
                                      :value="item2.value"
                                    >
                                      <template v-slot:label>
                                        <li
                                          v-on:dblclick="
                                            taptapeditoractivateleft(item2)
                                          "
                                          :inner-html.prop="
                                            item2.line | truncateEnd(36)
                                          "
                                        ></li> </template
                                    ></v-radio> -->
                                  </div>
                                </div>
                                <div v-if="!edit">
                                  <v-checkbox
                                    :color="maincolor.theme"
                                    v-model="item1.value"
                                    class=""
                                    :value="item2.value"
                                  >
                                    <template v-slot:label>
                                      <li
                                        class="col-12"
                                        :inner-html.prop="item2.line"
                                      ></li>
                                    </template>
                                  </v-checkbox>
                                </div>
                              </div>
                            </div>
                          </div>
                        </v-expansion-panel-content>

                        <div
                          style="position:absolute;top33%;left:44%;display:flex;"
                        >
                          <v-menu
                            rounded="xl"
                            offset-y
                            left
                            content-class="Vertrag_Paragraph_Importieren_menu"
                            :close-on-content-click="false"
                            width="370"
                          >
                            <template v-slot:activator="{ on }">
                              <v-btn
                                class="pt-5 pb-5"
                                icon
                                @mouseenter="hoveritem = item"
                                @mouseleave="hoveritem = null"
                              >
                                <v-icon
                                  v-if="hoveritem !== item"
                                  color="#d8d8d8"
                                  style="font-size: 10px"
                                  class="mt-3"
                                  >mdi-checkbox-blank-circle</v-icon
                                >
                                <v-icon
                                  color="#7C7C7C"
                                  v-if="hoveritem === item"
                                  v-on="on"
                                  style="font-size: 20px"
                                  class=""
                                  >mdi-file-import-outline</v-icon
                                >
                              </v-btn>
                            </template>
                            <v-card
                              elevation="0"
                              width="370"
                              min-height="190"
                              rounded="xl"
                              class="ma-0 pa-0"
                              outlined
                            >
                              <div style="display: flex" class="pt-2">
                                <h5
                                  class="mt-3 ml-6"
                                  style="font-weight: 700; font-size: 16px"
                                >
                                  <strong
                                    >Vertrag & Paragraph Importieren</strong
                                  >
                                </h5>
                                <v-spacer></v-spacer>
                                <v-icon
                                  color="#7C7C7C"
                                  v-on="on"
                                  style=""
                                  class="mt-1 mr-7"
                                >
                                  mdi-file-import-outline</v-icon
                                >
                              </div>

                              <div style="display: flex" class="mt-4">
                                <v-icon size="24" class="ml-5 mt-n3"
                                  >mdi-file-document-outline</v-icon
                                >
                                <div style="width: 21em">
                                  <v-card
                                    elevation="0"
                                    outlined
                                    max-width="340"
                                    style="border-color: #767577"
                                    rounded="xl"
                                    min-height="20"
                                    class="mb-2 ml-2"
                                  >
                                    <v-expansion-panels flat accordion>
                                      <v-expansion-panel
                                        class=""
                                        style="background-color: transparent"
                                      >
                                        <v-expansion-panel-header
                                          style="
                                            height: 1em;
                                            border-radius: 20px;
                                          "
                                        >
                                          <v-icon
                                            @click.stop="onClick()"
                                            class="ml-4 mr-2"
                                            >mdi-magnify</v-icon
                                          >

                                          <v-text-field
                                            dense
                                            v-model="contract_name"
                                            @click.stop="onClick()"
                                            class="pt-4 pl-n1 some-style"
                                            placeholder="Vertrag selektieren"
                                          >
                                          </v-text-field>
                                          <template v-slot:actions>
                                            <v-icon class="mr-6"
                                              >mdi-menu-down</v-icon
                                            >
                                          </template>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                          <v-divider
                                            style="background-color: #767577"
                                            class="mt-n2 mb-2 ml-n1 mr-3"
                                          ></v-divider>
                                          <v-card
                                            elevation="0"
                                            class="expand ml-n3 pr-n3"
                                            height="190"
                                            width="340"
                                            style="overflow-x: hidden"
                                          >
                                            <div
                                              class="pt-4"
                                              v-for="item in items_search"
                                              :key="item"
                                            >
                                              <v-row class="mt-n2 mb-n3">
                                                <v-col cols="1">
                                                  <v-icon
                                                    size="21"
                                                    class="ml-1 mt-n1"
                                                    >mdi-file-document-outline</v-icon
                                                  >
                                                </v-col>
                                                <v-col
                                                  style="cursor: pointer"
                                                  @click="contract_name = item"
                                                  cols="11"
                                                >
                                                  <p class="ml-5">
                                                    {{
                                                      item
                                                        | truncateEnd(18, "...")
                                                    }}
                                                  </p>
                                                </v-col>
                                              </v-row>
                                            </div>
                                          </v-card>
                                        </v-expansion-panel-content>
                                      </v-expansion-panel>
                                    </v-expansion-panels>
                                  </v-card>
                                </div>
                                <!-- <v-autocomplete
        v-model="contract_name"
        prepend-inner-icon="mdi-magnify"
        :items="items"
        :search-input.sync="search1"
        cache-items
        class="mx-2"
        return-object
        flat
        hide-no-data
        hide-details
        item-text="value"
        item-value="id"
        label="Vertrag selektieren"
        
        dense
          outlined
         rounded
                                    :menu-props="{
                                      bottom: true,
                                      offsetY: true,
                                    }"
                                    :color="maincolor.theme"
      ></v-autocomplete> -->
                                <!-- <v-select
                                    label="Vertrag selektieren"
                                    prepend-inner-icon="mdi-magnify"
                                    v-model="contract_name"
                                    :items="items"
                                    return-object
                                    item-text="value"
                                    item-value="id"
                                    dense
                                    outlined
                                    rounded
                                    :menu-props="{
                                      bottom: true,
                                      offsetY: true,
                                    }"
                                    :color="maincolor.theme"
                                  ></v-select> -->
                              </div>

                              <div style="display: flex" class="mt-3">
                                <v-icon size="24" class="ml-5 mt-n1"
                                  >mdi-card-bulleted-outline</v-icon
                                >
                                <div style="width: 21em">
                                  <v-card
                                    elevation="0"
                                    outlined
                                    max-width="340"
                                    style="border-color: #767577"
                                    rounded="xl"
                                    min-height="20"
                                    class="mb-1 ml-2"
                                  >
                                    <v-expansion-panels flat accordion>
                                      <v-expansion-panel
                                        class=""
                                        style="background-color: transparent"
                                      >
                                        <v-expansion-panel-header
                                          style="
                                            height: 1em;
                                            border-radius: 20px;
                                          "
                                        >
                                          <v-icon
                                            @click.stop="onClick()"
                                            class="ml-4 mr-2"
                                            >mdi-magnify</v-icon
                                          >

                                          <v-text-field
                                            dense
                                            v-model="card_name"
                                            @click.stop="onClick()"
                                            class="pt-4 pl-n1 some-style"
                                            placeholder="Abschnitt selektieren"
                                          >
                                          </v-text-field>
                                          <template v-slot:actions>
                                            <v-icon class="mr-6"
                                              >mdi-menu-down</v-icon
                                            >
                                          </template>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                          <v-divider
                                            style="background-color: #767577"
                                            class="mt-n2 mb-2 ml-n1 mr-3"
                                          ></v-divider>
                                          <v-card
                                            elevation="0"
                                            class="expand ml-n3 pr-n3"
                                            height="190"
                                            width="340"
                                            style="overflow-x: hidden"
                                          >
                                            <div
                                              class="pt-4"
                                              v-for="item in items2_search"
                                              :key="item"
                                            >
                                              <v-row class="mt-n2 mb-n3">
                                                <v-col cols="1">
                                                  <v-icon
                                                    size="21"
                                                    class="ml-1 mt-n1"
                                                    >mdi-file-document-outline</v-icon
                                                  >
                                                </v-col>
                                                <v-col
                                                  style="cursor: pointer"
                                                  cols="11"
                                                  @click="card_name = item"
                                                >
                                                  <p class="ml-5">
                                                    {{
                                                      item
                                                        | truncateEnd(18, "...")
                                                    }}
                                                  </p>
                                                </v-col>
                                              </v-row>
                                            </div>
                                          </v-card>
                                        </v-expansion-panel-content>
                                      </v-expansion-panel>
                                    </v-expansion-panels>
                                  </v-card>
                                </div>

                                <!-- <v-autocomplete
        v-model="card_name"
        prepend-inner-icon="mdi-magnify"
        :items="items2"
        :search-input.sync="search2"
        cache-items
        class="mx-2"
        return-object
        flat
        hide-no-data
        hide-details
        item-text="value"
        item-value="id"
        label="Paragraph selektieren"
        dense
          outlined
         rounded
                                    :menu-props="{
                                      bottom: true,
                                      offsetY: true,
                                    }"
                                    :color="maincolor.theme"
      ></v-autocomplete> -->
                                <!-- <v-select
                                    label="Paragraph selektieren"
                                    prepend-inner-icon="mdi-magnify"
                                    v-model="card_name"
                                    :items="items2"
                                    return-object
                                    item-text="value"
                                    item-value="id"
                                    dense
                                    outlined
                                    rounded
                                    :menu-props="{
                                      bottom: true,
                                      offsetY: true,
                                    }"
                                    :color="maincolor.theme"
                                  ></v-select> -->
                              </div>
                              <div
                                v-if="items3.length !== 0"
                                style="display: flex"
                                class="ml-5"
                              >
                                <v-icon
                                  :color="maincolor.theme"
                                  class="mr-2 mt-3"
                                >
                                  mdi-bookmark-multiple
                                </v-icon>
                                <v-card
                                  elevation="0"
                                  width="285"
                                  min-height="10"
                                >
                                  <div
                                    class="mt-3 ml-5 mb-n6"
                                    v-for="(item, index) in items3"
                                    :key="index"
                                    style="display: flex"
                                  >
                                    <p
                                      v-if="!item.selected"
                                      class="mt-n1"
                                      style="font-size: 16px"
                                    >
                                      §
                                    </p>
                                    <p v-if="!item.selected" class="pl-3">
                                      {{ item.name | truncateEnd(20) }}
                                    </p>
                                    <p
                                      v-if="item.selected"
                                      class="mt-n1"
                                      style="font-size: 16px; font-weight: 700"
                                    >
                                      §
                                    </p>
                                    <p
                                      v-if="item.selected"
                                      class="pl-3"
                                      style="font-weight: 700"
                                    >
                                      {{ item.name | truncateEnd(20) }}
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-checkbox
                                      v-model="items3checkbox"
                                      :color="maincolor.theme"
                                      :value="item.name"
                                      class="mr-4"
                                    ></v-checkbox>
                                  </div>
                                </v-card>
                              </div>
                              <div style="display: flex" class="mr-5 pb-2 mt-2">
                                <v-spacer></v-spacer>
                                <v-btn
                                  class=""
                                  text
                                  :color="maincolor.theme"
                                  style="text-transform: none"
                                  @click="
                                    importcardfromanothercomponenttwoways(
                                      card_name,
                                      contract_name,
                                      items3checkbox,
                                      item
                                    )
                                  "
                                >
                                  Importieren
                                </v-btn>
                              </div>
                            </v-card>
                          </v-menu>
                          <v-btn
                            icon
                            class="pb-5 pt-5"
                            @mouseenter="hoveritem = item"
                            @mouseleave="hoveritem = null"
                          >
                            <v-icon
                              v-if="hoveritem !== item"
                              color="#d8d8d8"
                              style="font-size: 10px"
                              class="mt-3"
                              >mdi-checkbox-blank-circle</v-icon
                            >
                            <v-icon
                              v-if="hoveritem === item"
                              color="#7C7C7C"
                              @click="duplicate_card(item)"
                              style="font-size: 20px"
                              class=""
                              >mdi-file-document-multiple-outline</v-icon
                            >
                          </v-btn>
                          <v-btn
                            icon
                            class="pb-5 pt-5"
                            @mouseenter="hoveritem = item"
                            @mouseleave="hoveritem = null"
                          >
                            <v-icon
                              v-if="hoveritem !== item"
                              color="#d8d8d8"
                              style="font-size: 10px"
                              class="mt-3"
                              >mdi-checkbox-blank-circle</v-icon
                            >
                            <v-icon
                              v-if="hoveritem === item"
                              color="#7C7C7C"
                              @click="add_new_card(item)"
                              style="font-size: 20px"
                              class=""
                              >mdi-card-plus-outline</v-icon
                            >
                          </v-btn>
                        </div>
                        <ul
                          style="
                            position: absolute;
                            top: 5px;
                            right: -7.4%;
                            z-index: 4;
                          "
                        >
                          <li v-if="!item.isactive">
                            <v-icon size="38" class="" style="" color="#d8d8d8"
                              >mdi-checkbox-blank-circle-outline</v-icon
                            >
                          </li>
                          <li v-if="item.isactive">
                            <v-icon
                              size="38"
                              class=""
                              style=""
                              :color="maincolor.theme"
                              >mdi-checkbox-blank-circle-outline</v-icon
                            >
                          </li>

                          <li
                            v-if="item.eye"
                            @click="eyefunc(item.id)"
                            style="cursor: pointer; margin-top: -34px"
                          >
                            <v-icon
                              size="30"
                              color="#d8d8d8"
                              style=""
                              class="pl-1"
                              >mdi-checkbox-blank-circle</v-icon
                            >
                          </li>
                          <li
                            v-if="item.eye"
                            @click="eyefunc(item.id)"
                            style="cursor: pointer; margin-top: -26px"
                          >
                            <v-icon
                              size="22"
                              color="white"
                              style="padding-left: 0.37em"
                              class=""
                              >mdi-eye</v-icon
                            >
                          </li>

                          <li
                            v-if="!item.eye"
                            @click="eyefunc(item.id)"
                            style="cursor: pointer; margin-top: -34px"
                          >
                            <v-icon size="30" color="white" class="pl-1"
                              >mdi-checkbox-blank-circle</v-icon
                            >
                          </li>
                          <li
                            v-if="!item.eye"
                            @click="eyefunc(item.id)"
                            style="cursor: pointer; margin-top: -27px"
                          >
                            <v-icon
                              size="24"
                              color="#d8d8d8"
                              style="padding-left: 0.3em"
                              class=""
                              >mdi-eye</v-icon
                            >
                          </li>

                          <li v-if="item.isactive" style="margin-top: -27px">
                            <v-icon
                              size="32"
                              :color="maincolor.theme"
                              style="padding-left: 0.1em"
                              >mdi-checkbox-blank-circle</v-icon
                            >
                            <!-- <v-icon size="17" v-if="item.isactive" :color=maincolor.theme style="padding-left:10px;;" class="mt-n11">mdi-checkbox-blank-circle</v-icon> -->
                          </li>
                          <li v-if="item.isactive" style="margin-top: -27px">
                            <v-icon
                              size="22"
                              color="white"
                              style="padding-left: 0.37em"
                              >mdi-eye</v-icon
                            >
                          </li>
                        </ul>
                        <v-banner
                          v-if="item.isactive"
                          width="5"
                          height="4275"
                          dark
                          style="
                            transform: rotate(180deg);
                            transform-origin: top left;
                            position: absolute;
                            top: 2em;
                            left: 105.3%;
                          "
                          class=""
                          :color="maincolor.theme"
                        ></v-banner>
                      </v-expansion-panel>
                    </v-card>
                  </div>
                </draggable>
              </v-expansion-panels>
              <!-- <ul style="position:absolute; top: 14px; right: -15px;z-index:4;">
                  <li>
                    <div id="prefirstLine" class="smalldivider originallengthcolor"></div>
                  </li>
                  <li>
                    <div id="firstCircle" class="node c1color">
                      <div id="firstCircle1" class="node1 c2color">
                        <div id="firstCircle2" class="node2"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div id="firstLine" class="divider originallengthcolor"></div>
                  </li>
                  <li>
                    <div id="secondCircle" class="node c1color">
                      <div id="secondCircle1" class="node1 c2color">
                        <div id="secondCircle2" class="node2"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div id="secondLine" class="divider originallengthcolor"></div>
                  </li>
                  <li>
                    <div id="thirdCircle" class="node c1color">
                      <div id="thirdCircle1" class="node1 c2color">
                        <div id="thirdCircle2" class="node2"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div id="thirdLine" class="divider originallengthcolor"></div>
                  </li>
                  <li>
                    <div id="fourthCircle" class="node c1color">
                      <div id="fourthCircle1" class="node1 c2color">
                        <div id="fourthCircle2" class="node2"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div id="fourthLine" class="divider originallengthcolor"></div>
                  </li>
                  <li>
                    <div id="fifthCircle" class="node c1color">
                      <div id="fifthCircle1" class="node1 c2color">
                        <div id="fifthCircle2" class="node2"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div id="fifthLine" class="divider originallengthcolor"></div>
                  </li>
                  <li>
                    <div id="sixCircle" class="node c1color">
                      <div id="sixCircle1" class="node1 c2color">
                        <div id="sixCircle2" class="node2"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div id="sixLine" class="divider originallengthcolor"></div>
                  </li>
                  <li>
                    <div id="sevenCircle" class="node c1color">
                      <div id="sevenCircle1" class="node1 c2color">
                        <div id="sevenCircle2" class="node2"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div id="sevenLine" class="largedivider originallengthcolor"></div>
                  </li>
                </ul> -->
            </v-card>
          </div>

          <!-- card2 -->

          <div
            style="width: 55%; background-color: #ffffff; position: relative"
            id="printme"
          >
            <v-card
              elevation="0"
              style="background-color: #ffffff; min-height: 120vh"
            >
              <v-list>
                <v-list-item>
                  <v-list-item-content
                    style="
                      margin-right: 20mm;
                      padding-left: 20mm !important;
                      margin-top: 3%;
                    "
                  >
                    <!-- <v-btn @click="testing()">test</v-btn> -->
                    <div v-if="eyecheck === false">
                      <p :style="document.rightSide.style">
                        <strong>{{ document.rightSide.title }}</strong>
                      </p>
                    </div>
                    <div v-click-outside="onClickOutside2">
                      <div
                        v-for="(item, i) in document.rightSide.card"
                        :key="i"
                      >
                        <div v-if="item.eye === true">
                          <div v-for="(item1, j) in item.section" :key="j">
                            <div v-if="item1.if === true">
                              <!-- <div v-for="(item2,k) in item1.value" :key="k" > -->
                              <div v-if="item1.value">
                                <div v-if="item1.isStrong === true">
                                  <div v-if="item1.heading_property_number">
                                    <div
                                      v-if="item1.tiptapedit"
                                      v-on:dblclick="
                                        taptapeditoractivateright(item1)
                                      "
                                    >
                                      <tiptap-vuetify
                                        spellcheck="false"
                                        v-model="
                                          item1.dependent_values[0].display
                                        "
                                        :extensions="extensions"
                                      ></tiptap-vuetify>
                                    </div>
                                    <div
                                      v-if="!item1.tiptapedit"
                                      v-on:dblclick="
                                        taptapeditoractivateright(item1)
                                      "
                                    >
                                      <p :style="item1.style">
                                        <strong
                                          >§{{ item1.heading_value }} <br />
                                        </strong>
                                        <strong
                                          :inner-html.prop="item1.display"
                                        >
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                  <div v-else>
                                    <div
                                      v-if="item1.tiptapedit"
                                      v-on:dblclick="
                                        taptapeditoractivateright(item1)
                                      "
                                    >
                                      <tiptap-vuetify
                                        spellcheck="false"
                                        v-model="
                                          item1.dependent_values[0].display
                                        "
                                        :extensions="extensions"
                                      />
                                    </div>
                                    <div
                                      v-if="!item1.tiptapedit"
                                      v
                                      v-on:dblclick="
                                        taptapeditoractivateright(item1)
                                      "
                                    >
                                      <p :style="item1.style">
                                        <strong
                                          :inner-html.prop="item1.display"
                                        ></strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div v-else>
                                  <div
                                    v-if="item1.inner_heading_property_number"
                                  >
                                    <div
                                      v-if="item1.tiptapedit"
                                      v-on:dblclick="
                                        taptapeditoractivateright(item1)
                                      "
                                    >
                                      <tiptap-vuetify
                                        spellcheck="false"
                                        v-model="
                                          item1.dependent_values[0].display
                                        "
                                        :extensions="extensions"
                                      />
                                    </div>
                                    <div
                                      v-if="!item1.tiptapedit"
                                      style="display: flex"
                                      v-on:dblclick="
                                        taptapeditoractivateright(item1)
                                      "
                                    >
                                      <p>{{ item1.inner_heading_value }}.</p>
                                      <p :inner-html.prop="item1.display"></p>
                                    </div>
                                  </div>
                                  <div v-else>
                                    <div
                                      v-if="item1.tiptapedit"
                                      v-on:dblclick="
                                        taptapeditoractivateright(item1)
                                      "
                                    >
                                      <tiptap-vuetify
                                        spellcheck="false"
                                        v-model="
                                          item1.dependent_values[0].display
                                        "
                                        :extensions="extensions"
                                      />
                                    </div>
                                    <div
                                      v-if="!item1.tiptapedit"
                                      v-on:dblclick="
                                        taptapeditoractivateright(item1)
                                      "
                                    >
                                      <p
                                        :style="item1.style"
                                        :inner-html.prop="item1.display"
                                      ></p>
                                    </div>
                                  </div>
                                </div>
                                <div v-if="item1.afterlinebreak">
                                  <div
                                    v-for="(item2, k) in item1.afterlinebreak"
                                    :key="k"
                                  >
                                    <br />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
const { dialog } = require("electron").remote;
import { Editor, EditorMenuBar, EditorContent } from "tiptap";
import { remote } from "electron";
import {
  TiptapVuetify,
  // Heading,
  // Bold,
  // Italic,
  // Strike,
  // Underline,
  // Code,
  // Paragraph,
  // BulletList,
  // OrderedList,
  // ListItem,
  // Link,
  // Blockquote,
  // HardBreak,
  // HorizontalRule,
  // History,
} from "tiptap-vuetify";
const Cryptr = require("cryptr");
var electron = require("electron");
var fs = require("fs");
import store from "../store";
const cryptr = new Cryptr("myTotalySecretKey");
import { mapState } from "vuex";
import Vue from "vue";
//import CountryFlag from "@dzangolab/vue-country-flag-icon";
import "@dzangolab/vue-country-flag-icon/dist/CountryFlag.css"; // import stylesheet
import { bus } from "../main";
import draggable from "vuedraggable";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  
  Link,
  Strike,
  Underline,
  History,
} from "tiptap-extensions";
export default {
  name: "newcontractcreate",
  components: {
    draggable,
    TiptapVuetify,
    EditorMenuBar,
    EditorContent,
  },
  props: {
    activeButtons: {
      type: Array,
      validator: function (list) {
        for (let el of list) {
          // The value must match one of these strings
          if (
            [
              "undo",
              "redo",
              "paragraph",
              "h1",
              "h2",
              "h3",
              "blockquote",
              "link",
              "underline",
              "strike",
              "italic",
              "bold",
              "code",
              "horizontal_rule",
              "bullet_list",
              "ordered_list",
              "code",
              "code_block",
              "list_check",
              "signature_freehand",
            ].indexOf(el) === -1
          ) {
            return -1;
          }
        }
        return 1;
      },
      default: () => [
        "undo",
        "redo",
        "paragraph",
        "h1",
        "h2",
        "h3",
        "blockquote",
        "link",
        "underline",
        "strike",
        "italic",
        "bold",
        "code",
        "horizontal_rule",
        "bullet_list",
        "ordered_list",
        "code_block",
        "list_check",
        "signature_freehand",
      ],
    },
  },
  data: () => ({
    items3checkbox: [],
    new_value_editchecker: "",
    old_value_editchecker: "",
    old_value_editchecker_v2: "",
    count_value_editchecker: false,
    card_id_editchecker_v2: "",
    extensions: [
      History,
     
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3],
          },
        },
      ],
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      Bold,
      Code,
      TodoItem,
      TodoList,
      HorizontalRule,
      ListItem,
      BulletList,
      OrderedList,
      HardBreak,
      CodeBlock,
    ],
    dragging: false,
    opened_pannal: null,
    pannal_active_drag_check: "",
    eyelarge: true,
    eyesmall: false,
    card_name: "",
    contract_name: "",
    items: [],
    items2: [],
    items3: [],
    items_search: [],
    items2_search: [],
    current_admin_name: "",
    current_admin_versions: [],
    org_value2: {},
    org_value1: {},
    hoveritem: null,
    hoveritem2: null,
    hoveritem3: null,
    semiedit: false,
    local_document_value: [],
    local_document_count: 0,
    contract_title: "Contract Vertrag",
    edit: true,
    document: {
      leftSide: {
        linearprogressvalue: 0,
        signature: false,
        signaturedata: "",
        card: [
          {
            id: 1,
            eye: false,
            name: "<strong>Vertragspartner</strong>",
            name_edit: false,
            total_fields: 8,
            completed_fields: 0,
            linearprogressvalue: 0,
            isactive: false,
            havesomevalue: false,
            isedited: false,
            import_counter: 0,
            section: [
              {
                eid: "s1",
                statement:
                  "Unter welchem Namen betreiben Sie Ihren Amazon-Shop?",
                type: "textfield",
                length: 1,
                textfieldapproval: false,
                dropselect_display: false,
                fields_display: true,
                ishelp: false,
                tiptapedit: false,
                fields: [
                  {
                    eid: "s1-ms1",
                    line: "",
                    value: "",
                    size: "col-12",
                  },
                ],
              },
              {
                tiptapedit: false,
                eid: "s2",
                statement:
                  "Handelt es sich bei dem Vertragspartner des Kunden um eine natürliche oder juristische Person?",
                type: "dropselect",
                length: 2,
                value: "",
                choices: ["Natürliche Person", "Juristische Person"],
                dropselect_display: true,
                textfieldapproval: false,
                fields_display: false,
                ishelp: false,
                dropselect: [
                  {
                    tiptapedit: false,
                    on_which_to_show: "Natürliche Person",
                    eid: "s2-ms1",
                    statement: "Wer soll Vertragspartner des Kunden werden?",
                    type: "dropselect",
                    length: 2,
                    value: "",
                    choices: ["keine Angabe", "Frau", "Herr"],
                  },
                ],
              },
              {
                tiptapedit: false,
                eid: "s3",
                statement: "Wer soll Vertragspartner des Kunden werden?",
                type: "textfield",
                length: 6,
                textfieldapproval: false,
                dropselect_display: false,
                fields_display: true,
                ishelp: false,
                fields: [
                  {
                    eid: "s3-ms1",
                    line: "Vorname",
                    value: "",
                    size: "col-5",
                  },
                  {
                    eid: "s3-ms2",
                    line: "Nachname",
                    value: "",
                    size: "col-7",
                  },
                  {
                    eid: "s3-ms3",
                    line: "Strasse",
                    value: "",
                    size: "col-8",
                  },
                  {
                    eid: "s3-ms4",
                    line: "Hausnummer",
                    value: "",
                    size: "col-4",
                  },
                  {
                    eid: "s3-ms5",
                    line: "PLZ",
                    value: "",
                    size: "col-3",
                  },
                  {
                    eid: "s3-ms6",
                    line: "Email",
                    value: "",
                    size: "col-9",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            eye: false,
            name: "<strong>Vertragsschluss</strong>",
            name_edit: false,
            total_fields: 8,
            completed_fields: 0,
            linearprogressvalue: 0,
            isactive: false,
            havesomevalue: false,
            isedited: false,
            import_counter: 0,
            section: [
              {
                tiptapedit: false,
                dropselect_display: false,
                fields_display: true,

                eid: "s1",
                statement:
                  "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insb. hins. des Preises)",
                type: "radio",
                length: 2,
                value: null,
                ishelp: true,
                ishelpstatement:
                  "Hiervon ist abhängig, wann der Vertragsschluss zustande kommt. Sind Ihre Angebote bereits bindend, kommt der Vertragsschluss mit der Bestellung durch den Kunden zustande. Wir empfehlen grundsätzlich die Angebote als nicht bindend einzuordnen, da Sie sich hiermit die Möglichkeit offenhalten, Bestellungen aus verschiedensten Gründen (z.B. Lieferengpass etc.) nicht zu bestätigen",
                fields: [
                  {
                    tiptapedit: false,
                    eid: "s1-ms1",
                    value: "Ja",
                    line: "Ja",
                  },
                  {
                    tiptapedit: false,
                    eid: "s1-ms2",
                    value: "Nein",
                    line: "Nein",
                  },
                ],
                textfieldapproval: false,
                textfieldapprovalfields: [],
              },
              {
                tiptapedit: false,
                textfieldapproval: false,
                dropselect_display: false,
                fields_display: true,
                ishelp: false,
                eid: "s2",
                statement:
                  "Bieten Sie dem Kunden die „1-Click Bestellfunktion“ an?",
                type: "radio",
                length: 2,
                value: null,
                fields: [
                  {
                    tiptapedit: false,
                    eid: "s2-ms1",
                    value: "Ja",
                    line: "Ja",
                  },
                  {
                    tiptapedit: false,
                    eid: "s2-ms2",
                    value: "Nein",
                    line: "Nein",
                  },
                ],
              },
              {
                tiptapedit: false,
                textfieldapproval: false,
                dropselect_display: false,
                fields_display: true,
                ishelp: false,
                eid: "s3",
                statement: "Erhält der Kunde eine Eingangsbestätigung?",
                type: "radio",
                length: 2,
                value: null,
                fields: [
                  {
                    tiptapedit: false,
                    eid: "s3-ms1",
                    value: "Ja",
                    line: "Ja",
                  },
                  {
                    tiptapedit: false,
                    eid: "s3-ms2",
                    value: "Nein",
                    line: "Nein",
                  },
                ],
              },
              {
                tiptapedit: false,
                dropselect_display: false,
                fields_display: true,
                ishelp: false,
                eid: "s4",
                statement:
                  "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen?",
                type: "radio",
                length: 2,
                value: null,
                fields: [
                  {
                    tiptapedit: false,
                    eid: "s4-ms1",
                    value: "Sprache wählen",
                    line: "Sprache wählen",
                  },
                  {
                    tiptapedit: false,
                    eid: "s4-ms2",
                    value: "Keine weitere Sprache",
                    line: "Keine weitere Sprache",
                  },
                ],
                textfieldapproval: true,
                textfieldapprovalfields: [
                  {
                    tiptapedit: false,
                    eid: "s4-ms3",
                    on_which_to_show: "Sprache wählen", // will have to look on which to show
                    line: "Sprache auswählen",
                    value: "",
                  },
                ],
              },
              {
                tiptapedit: false,
                fields_display: true,
                eid: "s5",
                statement: "Erfolgt eine Speicherung des Vertragstextes?",
                type: "radio",
                length: 2,
                value: null,
                ishelp: true,
                ishelpstatement:
                  "Sie sind nicht verpflichtet den Vertragstext zu speichern. Sofern Sie dies jedoch tun, muss der Kunde in den AGB hierüber informiert werden",
                fields: [
                  {
                    tiptapedit: false,
                    eid: "s5-ms1",
                    value: "Ja",
                    line: "Ja",
                  },
                  {
                    tiptapedit: false,
                    eid: "s5-ms2",
                    value: "Nein",
                    line: "Nein",
                  },
                ],
                textfieldapproval: false,
                textfieldapprovalfields: [],
                dropselect_display: true,
                dropselect: [
                  {
                    tiptapedit: false,
                    on_which_to_show: "Ja",
                    eid: "s5-ms3",
                    statement: "Wie lange wird der Vertragstext gespeichert?",
                    type: "dropselect",
                    length: 2,
                    value: "",
                    choices: [
                      ". 2 Jahre",
                      ". 5 Jahre ",
                      ". 10 Jahre ",
                      ". Abweichende Speicherdauer ",
                    ],
                  },
                ],
              },
              {
                tiptapedit: false,
                textfieldapproval: false,
                dropselect_display: false,
                fields_display: true,
                ishelp: false,
                eid: "s6",
                statement:
                  "Wie wird dem Kunden der Vertragstext zugänglich gemacht?",
                type: "textfield",
                length: 1,
                fields: [
                  {
                    eid: "s6-ms1",
                    line: "",
                    value: "",
                    size: "col-12",
                  },
                ],
              },
              {
                tiptapedit: false,
                textfieldapproval: false,
                dropselect_display: false,
                fields_display: true,
                ishelp: false,
                eid: "s7",
                statement:
                  "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies?",
                type: "textfield",
                length: 1,
                fields: [
                  {
                    eid: "s7-ms1",
                    line: "",
                    value: "",
                    size: "col-12",
                  },
                ],
              },
              {
                tiptapedit: false,
                dropselect_display: false,
                fields_display: true,

                eid: "s8",
                statement:
                  "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen?",
                type: "radio",
                length: 2,
                value: null,
                ishelp: true,
                ishelpstatement:
                  "Dies ist eine Information, die Sie dem Kunden laut Gesetz erteilen müssen. Sofern der Vertragsschluss über den normalen amazon-Ablauf zustande kommt, empfehlen wir die folgende Auswahl:",
                fields: [
                  {
                    tiptapedit: false,
                    eid: "s8-ms1",
                    value:
                      "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                    line: "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                  },
                  {
                    tiptapedit: false,
                    eid: "s8-ms2",
                    value: "Sonstiges",
                    line: "Sonstiges",
                  },
                ],
                textfieldapproval: true,
                textfieldapprovalfields: [
                  {
                    tiptapedit: false,
                    eid: "s8-ms3",
                    on_which_to_show: "Sonstiges", // will have to look on which to show
                    line: "",
                    value: "",
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            eye: false,
            name: "<strong>Bezahlung</strong>",
            name_edit: false,
            total_fields: 4,
            completed_fields: 0,
            linearprogressvalue: 0,
            isactive: false,
            havesomevalue: false,
            isedited: false,
            import_counter: 0,
            section: [
              {
                textfieldapproval: false,
                dropselect_display: false,
                fields_display: true,
                ishelp: false,
                tiptapedit: false,
                eid: "s1",
                statement:
                  "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung?",
                type: "textfield",
                length: 1,
                fields: [
                  {
                    eid: "s1-ms1",
                    line: "",
                    value: "",
                    size: "col-12",
                  },
                ],
              },
              {
                textfieldapproval: false,
                dropselect_display: false,
                fields_display: true,

                tiptapedit: false,
                eid: "s2",
                statement:
                  "Enthalten die Preise jeweils die gültige gesetzliche Umsatzsteuer?",
                type: "radio",
                length: 2,
                value: null,
                ishelp: true,
                ishelpstatement:
                  "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile. Hierzu sind Sie nur dann nicht verpflichtet, wenn Sie Kleinunternehmer iSd §19 UstG sind.",
                fields: [
                  {
                    tiptapedit: false,
                    eid: "s2-ms1",
                    value:
                      "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                    line: "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                  },
                  {
                    tiptapedit: false,
                    eid: "s2-ms2",
                    value: "Kleinunternehmer iSd § 19 UstG",
                    line: "Kleinunternehmer iSd § 19 UstG",
                  },
                ],
              },
              {
                dropselect_display: false,
                fields_display: true,

                tiptapedit: false,
                eid: "s3",
                statement:
                  "Fallen Liefer- oder Versandkosten an? Wenn ja, wie hoch sind diese?",
                type: "radio",
                length: 2,
                value: null,
                ishelp: true,
                ishelpstatement:
                  "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile",
                fields: [
                  {
                    tiptapedit: false,
                    eid: "s3-ms1",
                    value: "Ja",
                    line: "Ja",
                  },
                  {
                    tiptapedit: false,
                    eid: "s3-ms2",
                    value: "Nein",
                    line: "Nein",
                  },
                ],
                textfieldapproval: true,
                textfieldapprovalfields: [
                  {
                    tiptapedit: false,
                    eid: "s3-ms3",
                    on_which_to_show: "Ja", // will have to look on which to show
                    line: "Höhe auswählen",
                    value: "",
                  },
                ],
              },
              {
                dropselect_display: false,
                fields_display: true,

                tiptapedit: false,
                eid: "s4",
                statement:
                  "Hat der Kunde im Falle eines Widerrufs die Kosten für eine Rücksendung zu tragen?",
                type: "radio",
                length: 2,
                ishelp: true,
                ishelpstatement:
                  "Laut Gesetz trägt grundsätzlich der Verbraucher die Kosten der Rücksendung, sofern der Unternehmer diesen über diese Kostentragungspflicht unterrichtet hat. Dies gilt dann nicht, wenn der Unternehmer sich ausdrücklich dazu bereit erklärt hat die Kosten zu tragen.",
                value: null,
                fields: [
                  {
                    tiptapedit: false,
                    eid: "s4-ms1",
                    value: "Ja",
                    line: "Ja",
                  },
                  {
                    tiptapedit: false,
                    eid: "s4-ms2",
                    value: "Nein",
                    line: "Nein",
                  },
                ],
                textfieldapproval: false,
                textfieldapprovalfields: [],
              },
            ],
          },
        ],
      },
      rightSide: {
        title: "Contract Vertrag",
        title_access: false,
        style: "text-align:center; font-weight: 700 ; font-size: 24px",
        signature: false,
        signaturedata: "",
        card: [
          {
            id: 1,
            eye: false,
            name: "Vertragspartner",
            section: [
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s1-ms1"],
                    display: "[[0]]",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: ["s1-ms1"],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: center; font-weight: 700; font-size: 18.72px",
                isStrong: true,
                afterlinebreak: 0,
                heading_property_number: false,
                heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display: "Vertragspartner",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [
                  "s1-ms1",
                  "s2-ms1",
                  "s3-ms1",
                  "s3-ms2",
                  "s3-ms3",
                  "s3-ms4",
                  "s3-ms5",
                  "s3-ms6",
                ],
                value: "", //
                display: "",
                style: "text-align: center; font-weight: 700;font-size: 16px",
                isStrong: true,
                afterlinebreak: 0,
                heading_property_number: true,
                heading_value: 0,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s1-ms1"],
                    display:
                      "Vertragspartner des Kunden für die über den Amazon Shop [[0]] abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots:",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: ["s1-ms1"],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%",
                isStrong: false,
                afterlinebreak: 0,
                heading_property_number: false,
                heading_value: 0,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [
                      { "s2-ms1": ["Frau", "Herr"] },
                      "s3-ms1",
                      "s3-ms2",
                    ],
                    display: " [[0]]  [[1]] [[2]]",
                  },
                ],
                values_on_which_depend: ["s3-ms1", "s3-ms2"],
                value: "", //
                display: "",
                style:
                  "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                heading_property_number: false,
                heading_value: 0,
                isStrong: true,
                afterlinebreak: 0,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s3-ms3", "s3-ms4"],
                    display: " [[0]]  [[1]] ",
                  },
                ],
                values_on_which_depend: ["s3-ms3", "s3-ms4"],
                value: "", //
                display: "",
                style:
                  "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                heading_property_number: false,
                heading_value: 0,
                isStrong: true,
                afterlinebreak: 0,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s3-ms5", "s3-ms6"],
                    display: " [[0]]  [[1]] ",
                  },
                ],
                values_on_which_depend: ["s3-ms5", "s3-ms6"],
                value: "", //
                display: "",
                style:
                  "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                heading_property_number: false,
                heading_value: 0,
                isStrong: true,
                afterlinebreak: 0,
                tiptapedit: false,
              },
            ],
          },
          {
            id: 2,
            eye: false,
            name: "Vertragsschluss",
            section: [
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display: "Vertragsschluss",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [
                  "s1",
                  "s2",
                  "s3",
                  "s4",
                  "s5",
                  "s6-ms1",
                  "s7-ms1",
                  "s8",
                ],
                value: "", //
                display: "",
                style: "text-align: center; font-weight: 700;font-size: 16px",
                isStrong: true,
                afterlinebreak: 0,
                heading_property_number: true,
                heading_value: 0,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Die im Rahmen von Amazon vorgebrachten Angebote des Anbieters stellen verbindliche Angebote zum Abschluss eines Kaufverträges dar.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s1: "Ja" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Der Kunde kann die einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse gehen“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen. Anschließend gibt der Kunde über den Button „Jetzt kaufen“ ein verbindliches Angebot zum Abschluss eines Kaufverträges an den Anbieter ab.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s1: "Ja" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify;display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der Amazon Europe Core S.à r.l. (Société à responsabilité limitée): https://www.amazon.de/gp/help/customer/display.html?ie=UTF8&nodeId=201909000&ref_=footer_cou.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s1: "Ja" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify;display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Die bei Amazon eingestellten Produktseiten des Anbieters stellen unverbindliche Aufforderungen zum Abschluss eines Kaufverträges dar.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s1: "Nein" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify;display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Des Weiteren kann der Kunde durch die Betätigung des Buttons „Jetzt mit 1-Click® kaufen“ unmittelbar von der Produktdetailseite aus ein verbindliches Angebot zum Abschluss eines Kaufverträges abgeben.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s2: "Ja" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s3: "Ja" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Die Annahme des Angebots erfolgt durch eine E-Mail der Amazon Europe Core S.à r.l., welche den Versand der Ware bestätigt.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s3: "Ja" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              //Als Vertragssprache stehen deutsch, zur Verfügung.
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s4-ms3"],
                    display:
                      "Als Vertragssprache stehen deutsch,[[0]] zur Verfügung.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s4: "Sprache wählen" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [
                      { "s5-ms3": [". 2 Jahre", ". 5 Jahre ", ". 10 Jahre "] },
                    ],
                    display:
                      "Der Vertragstext wird im Anschluss an den Vertragsschluss vom Anbieter gespeichert. Die Speicherung erfolgt für [[0]]",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s5: "Ja" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5% display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Der Vertragsschluss wird vom Anbieter nicht gespeichert.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s5: "Nein" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s6-ms1"],
                    display: "Der Kunde erhält den Vertragstext über [[0]]",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: ["s6-ms1"],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s7-ms1"],
                    display:
                      "Der Vertragstext ist dem Kunden auch im Anschluss an den Vertragsschluss noch über [[0]] zugänglich.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: ["s7-ms1"],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Im Rahmen des Vertragsschlusses über den amazon-Warenkorb kann der Kunde seine Daten, nachdem er diese in das amazon-Formular eingegeben hat jederzeit löschen oder die Löschung der eingegebenen Daten durch das Schließen des Browsers erreichen.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [
                  {
                    s8: "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                  },
                ],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      " Im Rahmen der „1-Click“-Bestelloption kann der Bestellvorgang über die Zurück-Funktion oder das Schließen des Browsers abgebrochen werden.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [
                  {
                    s8: "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                  },
                ],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s8-ms3"],
                    display: "[[0]]",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s8: "Sonstiges" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
            ],
          },
          {
            id: 3,
            eye: false,
            name: "Bezahlung",
            section: [
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display: "<h2><strong>Bezahlung</strong></h2>",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: ["s1-ms1", "s2", "s3", "s4"],
                value: "", //
                display: "",
                style: "text-align: center; font-weight: 700;font-size: 16px",
                isStrong: true,
                afterlinebreak: 0,
                heading_property_number: true,
                heading_value: 0,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s1-ms1"],
                    display:
                      " Als Zahlungsart steht/stehen dem Kunden [[0]] zur Verfügung.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: ["s1-ms1"],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Die für die Waren angegebenen Preise enthalten die jeweils gültige gesetzliche Mehrwertsteuer.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [
                  {
                    s2: "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                  },
                ],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Aufgrund der Kleinunternehmereigenschaft des Anbieters iSd § 19 UstG enthalten die angegebenen Preise keine Mehrwertsteuer.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [
                  { s2: "Kleinunternehmer iSd § 19 UstG" },
                ],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: ["s3-ms3"],
                    display: "Die Versandkosten betragen [[0]] je Bestellung.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s3: "Ja" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display: "Wir liefern versandkostenfrei.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s3: "Nein" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
              {
                if: true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                  {
                    depend_upon: [],
                    display:
                      "Der Kunde hat im Falle eines Widerrufs die unmittelbaren Kosten der Rücksendung zu tragen.",
                  },
                ],
                // values_that_update_string :["Rechtsform", "Fotos"],
                values_on_which_depend: [{ s4: "Ja" }],
                value: "", //
                display: "",
                style:
                  "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                isStrong: false,
                afterlinebreak: 1,
                heading_property_number: false,
                heading_value: 0,
                inner_heading_property_number: true,
                inner_heading_value: 0,
                displayed: false,
                tiptapedit: false,
              },
            ],
          },
        ],
      },
    },
  }),
  created() {
    for (var i = 0; i < store.state.contract_card_details.length; i++) {
      this.items.push(store.state.contract_card_details[i].contract_name);
    }
    this.items_search = this.items;
    bus.$on("newcontracttitle", (value) => {
      this.change_contract_title(value);
    });
  },
  beforeCreate() {
    this.$store.commit("settitlenewcontract", true);
    store.commit("seteyecheck", true);
  },
  beforeDestroy() {
    store.commit("settitlenewcontract", false);
    store.commit("seteyecheck", false);
    bus.$off("newcontracttitle", (value) => {
      this.change_contract_title(value);
    });
    for (var i = 0; i < this.document.leftSide.card.length; i++) {
      this.document.leftSide.card[i].isactive = false;
    }
    if (this.$contractopencreator === false) {
      const choice = dialog.showMessageBoxSync(remote.getCurrentWindow(), {
        type: "question",
        buttons: ["Nein", "Ja"],
        title: "Contract Vertrag",
        message: "Möchten Sie dies wirklich als neuen Vertrag speichern?",
      });
      if (choice === 1) {
        //commenting because it is slowing down
        if (this.contract_title === "Contract Vertrag") {
          var ctv = this.contract_title;
          ctv = ctv + store.state.new_contract_creator_counter;
          store.commit("contractsavefunc", {
            title: ctv,
          });
          store.commit("contractcardsavefunc", {
            title: ctv,
            document: this.document,
          });
          store.commit("addnewcontractinadminversions", ctv);
          var a = store.getters.checkVersionByAdminNameLatest("admin");
          store.commit("setcurrentadminversions", a[0].version);
          store.commit("newcontractcreatorcounter", "no value need to be send");
          store.dispatch("updatewritejson");
        } else {
          store.commit("contractsavefunc", {
            title: this.contract_title,
          });
          store.commit("contractcardsavefunc", {
            title: this.contract_title,
            document: this.document,
          });
          store.commit("addnewcontractinadminversions", this.contract_title);
          var a1 = store.getters.checkVersionByAdminNameLatest("admin");
          store.commit("setcurrentadminversions", a1[0].version);
          store.dispatch("updatewritejson");
        }
        //commenting end
      }
    } else if (this.$contractopencreator === true) {
      Vue.prototype.$contractopencreator = false;
      Vue.prototype.$contractopencreatordocdata = "";

      let val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_admin_name)
      );
      if (val == null) {
        val = {};
      }
      //console.log(store.state.current_admin_name);
      //console.log(localStorage.getItem("current_contract_title"));
      var a1v1 = localStorage.getItem("current_contract_title");
      var a2 = localStorage.getItem("current_contract_group_title");

      let b = JSON.stringify(this.document);
      val[a1v1 + "-" + a2] = b;
      //console.log(val);
      //console.log(this.contract);
      //this.contract_array.push(this.contract)
      localStorage.setItem(
        "contracts of " + store.state.current_admin_name,
        JSON.stringify(val)
      );

      var admin_name = store.state.current_admin_name;
      var data = localStorage.getItem("contracts of " + admin_name);
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile("./" + admin_name + ".json", encrypteddata, function () {});
    }
  },
  mounted() {
    if (this.$contractopencreator === true) {
      this.document = Vue.prototype.$contractopencreatordocdata;
      this.checkeyevalues();
    } else {
      var doc1 = this.document;
      this.document = doc1;
    }
    //  if(store.state.isAdmin === true){
    //   this.org_value1 = JSON.parse(JSON.stringify(this.document));
    //   this.mounted_admin()
    // }
    // else{
    //     this.org_value1 = JSON.parse(JSON.stringify(this.document));
    //     this.mounted_user()
    // }
  },
  // beforeDestroy() {
  //   store.commit("settitlenewcontract", false);
  //   store.commit("seteyecheck", false);
  //   bus.$off("newcontracttitle", (value) => {
  //     this.change_contract_title(value);
  //   });

  //   const choice = dialog.showMessageBoxSync(remote.getCurrentWindow(),{
  //       type: 'question',
  //       buttons: ['Nein','Ja' ],
  //       title: 'Contract Vertrag',
  //       message: 'Möchten Sie dies wirklich als neuen Vertrag speichern?'
  //     });
  //   if (choice === 1) {
  //     //commenting because it is slowing down
  //   if(this.contract_title === "Contract Vertrag"){
  //     var ctv = this.contract_title
  //     ctv = ctv + store.state.new_contract_creator_counter
  //     store.commit("contractsavefunc", {
  //       title: ctv,
  //     });
  //     store.commit("contractcardsavefunc", {
  //       title: ctv,
  //       document: this.document,
  //     });
  //     store.commit("addnewcontractinadminversions",ctv)
  //     var a = store.getters.checkVersionByAdminNameLatest("admin")
  //     store.commit("setcurrentadminversions",a[0].version);
  //     store.commit("newcontractcreatorcounter","no value need to be send")
  //   }
  //   else{
  //     store.commit("contractsavefunc", {
  //       title: this.contract_title,
  //     });
  //     store.commit("contractcardsavefunc", {
  //       title: this.contract_title,
  //       document: this.document,
  //     });
  //     store.commit("addnewcontractinadminversions",this.contract_title)
  //     var a1 = store.getters.checkVersionByAdminNameLatest("admin")
  //     store.commit("setcurrentadminversions",a1[0].version);
  //   }
  //   //commenting end
  //   }

  //   // store.commit("contractsavefunc", {
  //   //     title: this.contract_title,
  //   // });
  //   // store.commit("contractcardsavefunc", {
  //   //     title: this.contract_title,
  //   //     document: this.document,
  //   // });
  //   // store.commit("addnewcontractinadminversions",this.contract_title)
  //   // var a = store.getters.checkVersionByAdminNameLatest("admin")
  //   // store.commit("setcurrentadminversions",a[0].version);

  //   //if(this.contract_title === "Contract Vertrag" + store.state.new_contract_creator_counter){
  //   // store.commit("newcontractcreatorcounter","no value need to be send")
  //   // bus.$emit("newcontractversions",store.state.new_contract_creator_counter)
  //   //}

  //   // if (store.state.isAdmin === true) {
  //   //   this.disable_isactive_property()
  //   //   this.org_value2 = JSON.parse(JSON.stringify(this.document));
  //   //   if (JSON.stringify(this.org_value2) !== JSON.stringify(this.org_value1)) {
  //   //     this.add_percentage_admin();
  //   //     this.writefileandscreenshot_admin();
  //   //   }
  //   // } else {
  //   //   this.disable_isactive_property()
  //   //   this.org_value2 = JSON.parse(JSON.stringify(this.document));
  //   //   if (JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)) {
  //   //     this.add_percentage_user()
  //   //     this.writefileandscreenshot_user();
  //   //   }
  //   // }
  // },

  // mounted
  // mounted() {

  //   if(this.$contractopencreator===true){

  //    this.document=Vue.prototype.$contractopencreatordocdata

  //    Vue.prototype.$contractopencreator = false
  //    Vue.prototype.$contractopencreatordocdata="";
  //   }
  //   //  if(store.state.isAdmin === true){
  //   //   this.org_value1 = JSON.parse(JSON.stringify(this.document));
  //   //   this.mounted_admin()
  //   // }
  //   // else{
  //   //     this.org_value1 = JSON.parse(JSON.stringify(this.document));
  //   //     this.mounted_user()
  //   // }
  // },
  watch: {
    // editorComputed: function(){
    //     console.log(this.editor.element.innerText)
    //     this.editor.options.content=`ghghghghghghgh`
    //     console.log(this.editor.element.innerText)
    //   // this.editor.options.content=`<h3>dddd</h3>`;
    //   //return this.editor, new Date();
    // },
    items3checkboxfunc: function () {
      for (var i = 0; i < this.items3.length; i++) {
        if (this.items3checkbox.includes(this.items3[i].name)) {
          this.items3[i].selected = true;
        } else {
          this.items3[i].selected = false;
        }
      }
    },
    title_watch: function () {
      this.document.rightSide.title = this.contract_title;
      // this.document.rightSide.title_access = true
    },
    pushcontractinsearchtextfield: function () {
      var all_contracts_search = [];
      if (this.contract_name !== "") {
        for (var j = 0; j < this.items.length; j++) {
          if (this.items[j].includes(this.contract_name)) {
            all_contracts_search.push(this.items[j]);
          }
        }
        this.items_search = all_contracts_search;
      } else {
        this.items_search = this.items;
      }
    },
    pushcardnameinsearchtextfield: function () {
      var all_contracts_search = [];
      if (this.card_name !== "") {
        for (var j = 0; j < this.items2.length; j++) {
          if (this.items2[j].includes(this.card_name)) {
            all_contracts_search.push(this.items2[j]);
          }
        }
        this.items2_search = all_contracts_search;
      } else {
        this.items2_search = this.items2;
      }
    },
    update_local_document_value: function () {
      // console.log(this.new_value_editchecker);
      // console.log(this.old_value_editchecker);
      if (this.new_value_editchecker !== this.old_value_editchecker) {
        this.document.leftSide.card[
          this.card_id_editchecker - 1
        ].isedited = true;
      }
      if (this.count_value_editchecker === true) {
        this.old_value_editchecker = this.old_value_editchecker_v2;
        this.count_value_editchecker === false;
      }
    },
    pannalprogress1: function () {
      var count = 0;
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        var pannalfields = this.complete_fields_checker_v2(
          this.document.leftSide.card[i].section
        );
        this.document.leftSide.card[i].completed_fields =
          this.complete_fields_checker(pannalfields);
        if (this.document.leftSide.card[i].completed_fields > 0) {
          this.document.leftSide.card[i].havesomevalue = true;
          count = count + 1;
        } else if (this.document.leftSide.card[i].completed_fields === 0) {
          this.document.leftSide.card[i].havesomevalue = false;
        }
      }
      if (count !== 0) {
        this.document.rightSide.title_access = true;
      } else if (count === 0) {
        this.document.rightSide.title_access = false;
      }
    },
    pannalprogress2: function () {
      var value_counter = 1;
      for (var i = 0; i < this.document.rightSide.card.length; i++) {
        var array = new Array();
        var section_counter = 1;
        for (
          var j = 0;
          j < this.document.rightSide.card[i].section.length;
          j++
        ) {
          [
            this.document.rightSide.card[i].section[j].value,
            this.document.rightSide.card[i].section[j].display,
          ] = this.getting_values_and_setting_values(
            this.document.rightSide.card[i].section[j].values_on_which_depend,
            i,
            this.document.rightSide.card[i].section[j].dependent_values
          );
          array.push(this.document.rightSide.card[i].section[j].value);
          if (this.document.rightSide.card[i].section[j].value > 0) {
            this.document.rightSide.card[i].section[j].displayed = true;
          } else {
            this.document.rightSide.card[i].section[j].displayed = false;
          }
        }
        if (array.some((el) => el > 0)) {
          if (this.document.leftSide.card[i].havesomevalue === true) {
            for (
              j = 0;
              j < this.document.rightSide.card[i].section.length;
              j++
            ) {
              if (
                this.document.rightSide.card[i].section[j]
                  .heading_property_number === true &&
                this.document.rightSide.card[i].eye === true
              ) {
                //if(this.document.rightSide.card[i].){
                this.document.rightSide.card[i].section[j].heading_value =
                  value_counter;
                value_counter++;
                //break;
                //}
              }
              if (
                this.document.rightSide.card[i].section[j]
                  .inner_heading_property_number === true
              ) {
                if (
                  this.document.rightSide.card[i].section[j].displayed === true
                ) {
                  this.document.rightSide.card[i].section[
                    j
                  ].inner_heading_value = section_counter;
                  section_counter++;
                }
              }
            }
          }
        }
      }
    },
    pannalprogress3: function () {
      var per_expansion_value = 100 / this.document.leftSide.card.length;
      var count = 0;
      var value = 0;
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        this.document.leftSide.card[i].linearprogressvalue =
          per_expansion_value * (i + 1);
        if (this.document.leftSide.card[i].isactive === true) {
          count = count + 1;
          value = this.document.leftSide.card[i].linearprogressvalue;
          break;
        }
      }
      if (count === 0) {
        this.document.leftSide.linearprogressvalue = 0;
      } else if (count === 1) {
        this.document.leftSide.linearprogressvalue = value;
      }
    },
    amazon_special: function () {
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        for (
          var j = 0;
          j < this.document.leftSide.card[i].section.length;
          j++
        ) {
          if (
            this.document.leftSide.card[i].section[j].value ===
            "Juristische Person"
          ) {
            this.document.leftSide.card[i].section[j + 1].fields[0].line =
              "Firmenname";
            this.document.leftSide.card[i].section[j + 1].fields[0].size =
              "col-8";
            this.document.leftSide.card[i].section[j + 1].fields[1].line =
              "Rechtsform";
            this.document.leftSide.card[i].section[j + 1].fields[1].size =
              "col-4";
            this.document.leftSide.card[i].section[j].dropselect[0].value = "";
            break;
          } else if (
            this.document.leftSide.card[i].section[j].value ===
            "Natürliche Person"
          ) {
            this.document.leftSide.card[i].section[j + 1].fields[0].line =
              "Vorname";
            this.document.leftSide.card[i].section[j + 1].fields[0].size =
              "col-5";
            this.document.leftSide.card[i].section[j + 1].fields[1].line =
              "Nachname";
            this.document.leftSide.card[i].section[j + 1].fields[1].size =
              "col-7";
            break;
          }
        }
      }
    },
    card_name_wrt_contract: function () {
      this.items2 = [];
      this.items3 = [];
      for (var i = 0; i < store.state.contract_card_details.length; i++) {
        if (
          this.contract_name ===
          store.state.contract_card_details[i].contract_name
        ) {
          for (
            var j = 0;
            j <
            store.state.contract_card_details[i].document.leftSide.card.length;
            j++
          ) {
            this.items2.push(
              store.state.contract_card_details[i].document.leftSide.card[j]
                .name
            );
            if (
              store.state.contract_card_details[i].document.leftSide.card[j]
                .import_counter > 0
            ) {
              var obj = {
                name: store.state.contract_card_details[i].document.leftSide
                  .card[j].name,
                import_counter:
                  store.state.contract_card_details[i].document.leftSide.card[j]
                    .import_counter,
                selected: false,
              };

              this.items3.push(obj);
            }
          }
          this.items3.sort(function (a, b) {
            return a.import_counter - b.import_counter;
          });
          this.items3.reverse();
          // console.log(this.items3)
          // for (
          //   var j = 0;
          //   j <
          //   store.state.contract_card_details[i].document.leftSide.card.length;
          //   j++
          // ) {
          //   this.items2.push(
          //     store.state.contract_card_details[i].document.leftSide.card[j]
          //       .name
          //   );
          // }
          this.items2_search = this.items2;
          break;
        }
      }
    },
    update_hover_item: function () {
      if (this.hoveritem !== null) {
        this.hoveritem3 = true;
      } else if (this.hoveritem === null) {
        this.hoveritem3 = false;
      }
      // console.log(this.hoveritem3);
    },
    // pannal_isedited: function () {
    //   var i, j, k;
    //   if (this.document.leftSide.card.length == this.local_document_count) {
    //     for (i = 0; i < this.document.leftSide.card.length; i++) {
    //       var counter_cc = 0;
    //       for (j = 0; j < this.document.leftSide.card[i].section.length; j++) {
    //         if (
    //           this.document.leftSide.card[i].section[j].type === "textfield"
    //         ) {
    //           if (
    //             this.document.leftSide.card[i].section[j].statement !==
    //             this.local_document_value[i].section[j].statement
    //           ) {
    //             counter_cc = counter_cc + 1;
    //             break;
    //           }
    //         }
    //         if (
    //           this.document.leftSide.card[i].section[j].type === "dropselect"
    //         ) {
    //           if (
    //             this.document.leftSide.card[i].section[j].statement !==
    //             this.local_document_value[i].section[j].statement
    //           ) {
    //             counter_cc = counter_cc + 1;
    //             break;
    //           }
    //           if (
    //             this.document.leftSide.card[i].section[j].dropselect_display ===
    //             true
    //           ) {
    //             for (
    //               k = 0;
    //               k <
    //               this.document.leftSide.card[i].section[j].dropselect.length;
    //               k++
    //             ) {
    //               if (
    //                 this.document.leftSide.card[i].section[j].dropselect[k]
    //                   .statement !==
    //                 this.local_document_value[i].section[j].dropselect[k]
    //                   .statement
    //               ) {
    //                 counter_cc = counter_cc + 1;
    //                 break;
    //               }
    //             }
    //           }
    //         }
    //         if (this.document.leftSide.card[i].section[j].type === "radio") {
    //           if (
    //             this.document.leftSide.card[i].section[j].statement !==
    //             this.local_document_value[i].section[j].statement
    //           ) {
    //             counter_cc = counter_cc + 1;
    //             break;
    //           }
    //           if (
    //             this.document.leftSide.card[i].section[j].fields_display ===
    //             true
    //           ) {
    //             for (
    //               k = 0;
    //               k < this.document.leftSide.card[i].section[j].fields.length;
    //               k++
    //             ) {
    //               if (
    //                 this.document.leftSide.card[i].section[j].fields[k].line !==
    //                 this.local_document_value[i].section[j].fields[k].line
    //               ) {
    //                 counter_cc = counter_cc + 1;
    //                 break;
    //               }
    //             }
    //           }
    //           if (
    //             this.document.leftSide.card[i].section[j].textfieldapproval ===
    //             true
    //           ) {
    //             for (
    //               k = 0;
    //               k <
    //               this.document.leftSide.card[i].section[j]
    //                 .textfieldapprovalfields.length;
    //               k++
    //             ) {
    //               if (
    //                 this.document.leftSide.card[i].section[j]
    //                   .textfieldapprovalfields[k].statement !==
    //                 this.local_document_value[i].section[j]
    //                   .textfieldapprovalfields[k].statement
    //               ) {
    //                 counter_cc = counter_cc + 1;
    //                 break;
    //               }
    //             }
    //           }
    //           if (
    //             this.document.leftSide.card[i].section[j].dropselect_display ===
    //             true
    //           ) {
    //             for (
    //               k = 0;
    //               k <
    //               this.document.leftSide.card[i].section[j].dropselect.length;
    //               k++
    //             ) {
    //               if (
    //                 this.document.leftSide.card[i].section[j].dropselect[k]
    //                   .statement !==
    //                 this.local_document_value[i].section[j].dropselect[k]
    //                   .statement
    //               ) {
    //                 counter_cc = counter_cc + 1;
    //                 break;
    //               }
    //             }
    //           }
    //         }
    //         if (this.document.leftSide.card[i].section[j].type === "checkbox") {
    //           if (
    //             this.document.leftSide.card[i].section[j].statement !==
    //             this.local_document_value[i].section[j].statement
    //           ) {
    //             counter_cc = counter_cc + 1;
    //             break;
    //           }
    //           if (
    //             this.document.leftSide.card[i].section[j].fields_display ===
    //             true
    //           ) {
    //             for (
    //               k = 0;
    //               k < this.document.leftSide.card[i].section[j].fields.length;
    //               k++
    //             ) {
    //               if (
    //                 this.document.leftSide.card[i].section[j].fields[k].line !==
    //                 this.local_document_value[i].section[j].fields[k].line
    //               ) {
    //                 counter_cc = counter_cc + 1;
    //                 break;
    //               }
    //             }
    //           }
    //         }
    //       }
    //       if (counter_cc === 0) {
    //         this.document.leftSide.card[i].isedited = false;
    //       } else {
    //         this.document.leftSide.card[i].isedited = true;
    //       }
    //     }
    //   } else if (
    //     this.document.leftSide.card.length !== this.local_document_count
    //   ) {
    //     var index = this.document.leftSide.card.length - 1;
    //     var doc = this.document.leftSide.card[index];
    //     this.local_document_value.push(JSON.parse(JSON.stringify(doc)));
    //     this.local_document_count = this.local_document_count + 1;
    //   }
    // },
    import_contract: function () {
      for (var i = 0; i < this.importcontract.length; i++) {
        this.importcontract[i][0].id = this.document.leftSide.card.length + 1;
        this.importcontract[i][1].id = this.document.leftSide.card.length + 1;
        this.document.leftSide.card.push(this.importcontract[i][0]);
        this.document.rightSide.card.push(this.importcontract[i][1]);
      }
    },
    // pannal_drag_drop : function (){

    //  var i,x,y;
    //   var rar = new Array()
    //   for (i=0;i<this.document.leftSide.card.length;i++)
    //   {
    //     y = this.document.leftSide.card[i]
    //     x= this.document.rightSide.card.find(k => k.id === y.id)
    //     rar.push(x)
    //   }
    //   this.document.rightSide.card = rar;
    //   //panal progress 2
    //  // this.pannalprogress2();
    //  var value_counter = 1;
    //   for ( i = 0; i < this.document.rightSide.card.length; i++) {
    //     var array = new Array();
    //     var section_counter = 1;
    //     for (var j = 0; j < this.document.rightSide.card[i].section.length; j++) {
    //       [
    //         this.document.rightSide.card[i].section[j].value,
    //         this.document.rightSide.card[i].section[j].display,
    //       ] = this.getting_values_and_setting_values(
    //         this.document.rightSide.card[i].section[j].values_on_which_depend,
    //         i,
    //         this.document.rightSide.card[i].section[j].dependent_values
    //       );
    //       array.push(this.document.rightSide.card[i].section[j].value);
    //       if (this.document.rightSide.card[i].section[j].value > 0) {
    //         this.document.rightSide.card[i].section[j].displayed = true;
    //       } else {
    //         this.document.rightSide.card[i].section[j].displayed = false;
    //       }
    //     }
    //     if (array.some((el) => el > 0)) {
    //       if (this.document.leftSide.card[i].havesomevalue === true) {
    //         for (j = 0; j < this.document.rightSide.card[i].section.length; j++) {
    //           if (
    //             this.document.rightSide.card[i].section[j].heading_property_number ===
    //             true
    //           ) {
    //             //if(this.document.rightSide.card[i].){
    //             this.document.rightSide.card[i].section[j].heading_value = value_counter;
    //             value_counter++;
    //             //break;
    //             //}
    //           }
    //           if (
    //             this.document.rightSide.card[i].section[j]
    //               .inner_heading_property_number === true
    //           ) {
    //             if (this.document.rightSide.card[i].section[j].displayed === true) {
    //               this.document.rightSide.card[i].section[
    //                 j
    //               ].inner_heading_value = section_counter;
    //               section_counter++;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    // },
    circle_active: function () {
      var count = 0;
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        if (this.document.leftSide.card[i].isactive === true) {
          count = count + 1;
          break;
        }
      }
      if (count == 0) {
        this.circleactive = false;
      } else {
        this.circleactive = true;
      }
    },
  },
  //Computed:
  computed: {
    // editorComputed: function(){
    //   //  console.log(this.editor.element.innerText)
    //   //  this.editor.element.innerText=`ghghghghghghgh`
    //     console.log(this.editor.element.innerText)
    //   // this.editor.options.content=`<h3>dddd</h3>`;
    //   return this.editor, new Date();
    // },
    items3checkboxfunc: function () {
      return this.items3checkbox, new Date();
    },
    title_watch: function () {
      return this.contract_title, new Date();
    },
    pushcontractinsearchtextfield: function () {
      return this.contract_name, new Date();
    },
    pushcardnameinsearchtextfield: function () {
      return this.card_name, new Date();
    },
    update_local_document_value: function () {
      return this.new_value_editchecker, new Date();
    },
    ...mapState(["help", "maincolor", "importcontract", "eyecheck"]),
    pannalprogress1: function () {
      return JSON.stringify(this.document.leftSide.card), new Date();
    },
    pannalprogress2: function () {
      return JSON.stringify(this.document.leftSide.card), new Date();
    },
    pannalprogress3: function () {
      return JSON.stringify(this.document.leftSide.card), new Date();
    },
    amazon_special: function () {
      return JSON.stringify(this.document.leftSide.card), new Date();
    },
    card_name_wrt_contract: function () {
      return this.contract_name, new Date();
    },
    update_hover_item: function () {
      return this.hoveritem, new Date();
    },
    // pannal_isedited: function () {
    //   return JSON.stringify(this.document.leftSide.card), new Date();
    // },
    // pannal_drag_drop : function () {
    //   return JSON.stringify(this.document.leftSide.card), new Date();
    // },
    circle_active: function () {
      return JSON.stringify(this.document), new Date();
    },
    import_contract: function () {
      return this.importcontract, new Date();
    },
  },
  //filters
  filters: {
    truncateEnd: function (text, length, clamp) {
      clamp = clamp || "...";
      var node = document.createElement("div");
      node.innerHTML = text;
      var content = node.textContent;
      return content.length > length
        ? content.slice(0, length) + clamp
        : content;
    },
  },

  //methods
  methods: {
    testing() {},
    //leftside-card-heading
    onClickOutside3() {
      var i;
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        if (this.document.leftSide.card[i].name_edit === true) {
          this.document.leftSide.card[i].name_edit = false;
          this.document.leftSide.card[i].name =
            this.editor1.view.docView.contentDOM.innerHTML;
          var obj = this.document.rightSide.card[i].section.find(
            (o) =>
              o.dependent_values[0].display ===
              this.document.rightSide.card[i].name
          );
          obj.dependent_values[0].display = this.document.leftSide.card[i].name;
          this.document.rightSide.card[i].name =
            this.document.leftSide.card[i].name;
        }
      }
      // for (i = 0; i < this.document.rightSide.card.length; i++) {
      //     //var key = this.document.rightSide.card[i].name
      //     for(j=0; j < this.document.rightSide.card[i].section.length ; j++){
      //       console.log(this.document.rightSide.card[i].section[j].dependent_values[0].display)
      //     }
      //     // var obj = this.document.rightSide.card[i].section.find((o) => o.dependent_values[0].depend_upon === this.document.rightSide.card[i].name )
      //     // console.log(obj)
      //     // this.document.rightSide.card[i].name =  this.document.leftSide.card[i].name;
      // }
    },
    taptapeditorheadingleft(item) {
      this.editor1 = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        // content: `
        //   <h1>Yay Headlines!</h1>
        //   <p>All these <strong>cool tags</strong> are working now.</p>
        // `,
        content: item.name,
      });
      item.name_edit = true;
    },
    checkeyevalues() {
      var i;
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        if (this.document.leftSide.card[i].completed_fields > 0) {
          this.document.leftSide.card[i].eye = true;
          this.document.rightSide.card[i].eye = true;
        } else {
          this.document.leftSide.card[i].eye = false;
          this.document.rightSide.card[i].eye = false;
        }
      }
    },
    onClickOutside2() {
      // console.log("bb")
      // rightSide
      var i, j;
      for (i = 0; i < this.document.rightSide.card.length; i++) {
        for (j = 0; j < this.document.rightSide.card[i].section.length; j++) {
          this.document.rightSide.card[i].section[j].tiptapedit = false;
        }
      }
      // //rightSide value update
      var value_counter = 1;
      for (i = 0; i < this.document.rightSide.card.length; i++) {
        var array = new Array();
        var section_counter = 1;
        for (j = 0; j < this.document.rightSide.card[i].section.length; j++) {
          [
            this.document.rightSide.card[i].section[j].value,
            this.document.rightSide.card[i].section[j].display,
          ] = this.getting_values_and_setting_values(
            this.document.rightSide.card[i].section[j].values_on_which_depend,
            i,
            this.document.rightSide.card[i].section[j].dependent_values
          );
          array.push(this.document.rightSide.card[i].section[j].value);
          if (this.document.rightSide.card[i].section[j].value > 0) {
            this.document.rightSide.card[i].section[j].displayed = true;
          } else {
            this.document.rightSide.card[i].section[j].displayed = false;
          }
        }
        if (array.some((el) => el > 0)) {
          if (this.document.leftSide.card[i].havesomevalue === true) {
            for (
              j = 0;
              j < this.document.rightSide.card[i].section.length;
              j++
            ) {
              if (
                this.document.rightSide.card[i].section[j]
                  .heading_property_number === true &&
                this.document.rightSide.card[i].eye === true
              ) {
                //if(this.document.rightSide.card[i].){
                this.document.rightSide.card[i].section[j].heading_value =
                  value_counter;
                value_counter++;
                //break;
                //}
              }
              if (
                this.document.rightSide.card[i].section[j]
                  .inner_heading_property_number === true
              ) {
                if (
                  this.document.rightSide.card[i].section[j].displayed === true
                ) {
                  this.document.rightSide.card[i].section[
                    j
                  ].inner_heading_value = section_counter;
                  section_counter++;
                }
              }
            }
          }
        }
      }
    },
    onClickOutside() {
      var i, j, k;
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        for (j = 0; j < this.document.leftSide.card[i].section.length; j++) {
          //statement checking
          if (this.document.leftSide.card[i].section[j].tiptapedit === true) {
            this.document.leftSide.card[i].section[j].tiptapedit = false;
            this.document.leftSide.card[i].isedited = true;
          }
          //console.log(this.document.leftSide.card[i].section[j].eid,this.document.leftSide.card[i].section[j].tiptapedit)
          //drop select
          if (
            this.document.leftSide.card[i].section[j].dropselect_display ===
            true
          ) {
            for (
              k = 0;
              k < this.document.leftSide.card[i].section[j].dropselect.length;
              k++
            ) {
              if (
                this.document.leftSide.card[i].section[j].dropselect[k]
                  .tiptapedit === true
              ) {
                this.document.leftSide.card[i].section[j].dropselect[
                  k
                ].tiptapedit = false;
                this.document.leftSide.card[i].isedited = true;
              }
            }
          }
          // radio
          if (
            this.document.leftSide.card[i].section[j].fields_display === true &&
            this.document.leftSide.card[i].section[j].type === "radio"
          ) {
            for (
              k = 0;
              k < this.document.leftSide.card[i].section[j].fields.length;
              k++
            ) {
              if (
                this.document.leftSide.card[i].section[j].fields[k]
                  .tiptapedit === true
              ) {
                this.document.leftSide.card[i].section[j].fields[
                  k
                ].tiptapedit = false;
                this.document.leftSide.card[i].isedited = true;
              }
            }
            if (
              this.document.leftSide.card[i].section[j].dropselect_display ===
              true
            ) {
              if (
                this.document.leftSide.card[i].section[j].dropselect[0]
                  .tiptapedit === true
              ) {
                this.document.leftSide.card[i].section[
                  j
                ].dropselect[0].tiptapedit = false;
                this.document.leftSide.card[i].isedited = true;
              }
            }
            if (
              this.document.leftSide.card[i].section[j].textfieldapproval ===
              true
            ) {
              if (
                this.document.leftSide.card[i].section[j]
                  .textfieldapprovalfields[0].tiptapedit === true
              ) {
                this.document.leftSide.card[i].section[
                  j
                ].textfieldapprovalfields[0].tiptapedit = false;
                this.document.leftSide.card[i].isedited = true;
              }
            }
          }
          //checkbox
          if (
            this.document.leftSide.card[i].section[j].fields_display === true &&
            this.document.leftSide.card[i].section[j].type === "checkbox"
          ) {
            for (
              k = 0;
              k < this.document.leftSide.card[i].section[j].fields.length;
              k++
            ) {
              if (
                this.document.leftSide.card[i].section[j].fields[k]
                  .tiptapedit === true
              ) {
                this.document.leftSide.card[i].section[j].fields[
                  k
                ].tiptapedit = false;
                this.document.leftSide.card[i].isedited = true;
              }
            }
          }
        }
      }
    },
    //tiptap-for-content
    taptapeditoractivateleft(item) {
      item.tiptapedit = true;
    },
    taptapeditoractivateleftitem1(item) {
this.editor1 = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        // content: `
        //   <h1>Yay Headlines!</h1>
        //   <p>All these <strong>cool tags</strong> are working now.</p>
        // `,
        content: item.statement,
      });
      item.tiptapedit = true;
    },
     taptapeditoractivateleftitem2(item) {
this.editor1 = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        // content: `
        //   <h1>Yay Headlines!</h1>
        //   <p>All these <strong>cool tags</strong> are working now.</p>
        // `,
        content: item.line,
      });
      item.tiptapedit = true;
    },
    taptapeditoractivateleftitem3(item) {
this.editor1 = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        // content: `
        //   <h1>Yay Headlines!</h1>
        //   <p>All these <strong>cool tags</strong> are working now.</p>
        // `,
        content: item.statement,
      });
      item.tiptapedit = true;
    },
taptapeditoractivateleftitem4(item) {
this.editor1 = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        // content: `
        //   <h1>Yay Headlines!</h1>
        //   <p>All these <strong>cool tags</strong> are working now.</p>
        // `,
        content: item.statement,
      });
      item.tiptapedit = true;
    },
    taptapeditoractivateleftitem5(item) {
this.editor1 = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        // content: `
        //   <h1>Yay Headlines!</h1>
        //   <p>All these <strong>cool tags</strong> are working now.</p>
        // `,
        content: item.line,
      });
      item.tiptapedit = true;
    },
//     taptapeditoractivateleftitem6(item) {
//       alert("lldddddl")
//        console.log(item)
// this.editor1 = new Editor({
//         extensions: [
//           new Blockquote(),
//           new BulletList(),
//           new CodeBlock(),
//           new HardBreak(),
//           new Heading({ levels: [1, 2, 3] }),
//           new HorizontalRule(),
//           new ListItem(),
//           new OrderedList(),
//           new TodoItem(),
//           new TodoList(),
//           new Link(),
//           new Bold(),
//           new Code(),
//           new Italic(),
//           new Strike(),
//           new Underline(),
//           new History(),
//         ],
//         // content: `
//         //   <h1>Yay Headlines!</h1>
//         //   <p>All these <strong>cool tags</strong> are working now.</p>
//         // `,
//         content: item.line,
//       });
//       item.tiptapedit = true;
//     },
    importcardfromanothercomponenttwoways(
      card_name,
      contract_name,
      checkboxvalue,
      item
    ) {
      // console.log("aa")
      var local_array = [];
      if (checkboxvalue.length > 0) {
        local_array = checkboxvalue;
      }
      if (card_name !== "") {
        if (!checkboxvalue.includes(card_name)) {
          local_array.push(card_name);
        }
      }
      // console.log("AA")
      // console.log(local_array)
      // console.log("BB")
      // console.log(contract_name)
      // console.log(item)
      for (var i = 0; i < local_array.length; i++) {
        this.importcardfromanothercomponent(
          local_array[i],
          contract_name,
          item
        );
      }
      this.card_name = "";
      this.contract_name = "";
      this.checkboxvalue = [];
      this.items3checkbox = [];
    },
    importcardfromanothercomponent(card_name, contract_name, item) {
      var obj, obj2, left_copy_of_card, right_copy_of_card;
      if (card_name !== "" && contract_name !== "") {
        if (item.id === this.document.leftSide.card.length) {
          for (var i = 0; i < store.state.contract_card_details.length; i++) {
            if (
              this.contract_name ===
              store.state.contract_card_details[i].contract_name
            ) {
              store.commit("addcontractimportcounter", [
                contract_name,
                card_name,
              ]);
              obj = store.state.contract_card_details[
                i
              ].document.leftSide.card.find((o) => o.name === card_name);
              obj2 = store.state.contract_card_details[
                i
              ].document.rightSide.card.find((o) => o.name === card_name);

              break;
            }
          }
          left_copy_of_card = JSON.parse(JSON.stringify(obj));
          left_copy_of_card.id = item.id + 1;
          left_copy_of_card.isactive = false;
          left_copy_of_card.import_counter = 0;
          this.document.leftSide.card.push(left_copy_of_card);
          right_copy_of_card = JSON.parse(JSON.stringify(obj2));
          right_copy_of_card.id = item.id + 1;
          this.document.rightSide.card.push(right_copy_of_card);
        } else {
          var count = 1;
          var doc = this.document.leftSide.card;
          var docr = this.document.rightSide.card;
          for (i = 0; i < store.state.contract_card_details.length; i++) {
            if (
              this.contract_name ===
              store.state.contract_card_details[i].contract_name
            ) {
              store.commit("addcontractimportcounter", [
                contract_name,
                card_name,
              ]);
              obj = store.state.contract_card_details[
                i
              ].document.leftSide.card.find((o) => o.name === card_name);
              obj2 = store.state.contract_card_details[
                i
              ].document.rightSide.card.find((o) => o.name === card_name);
              break;
            }
          }

          left_copy_of_card = JSON.parse(JSON.stringify(obj));
          left_copy_of_card.id = null;
          left_copy_of_card.isactive = false;
          left_copy_of_card.import_counter = 0;
          doc.splice(item.id, 0, left_copy_of_card);
          right_copy_of_card = JSON.parse(JSON.stringify(obj2));
          docr.splice(item.id, 0, right_copy_of_card);
          for (i = 0; i < doc.length; i++) {
            doc[i].id = count;
            docr[i].id = count;
            count++;
          }
          // console.log(doc);
          // console.log(docr);
        }
      }
    },
    taptapeditoractivateright(item) {
      item.tiptapedit = true;
      // var val = item.tiptapedit;
      // // console.log(item.display);
      // for (var i = 0; i < this.document.rightSide.card.length; i++) {
      //   for (
      //     var j = 0;
      //     j < this.document.rightSide.card[i].section.length;
      //     j++
      //   ) {
      //     this.document.rightSide.card[i].section[j].tiptapedit = false;
      //   }
      // }
      // if (val === false) {
      //   item.tiptapedit = !item.tiptapedit;
      // } else if (val === true) {
      //   item.tiptapedit = false;
      // }
      // var value_counter = 1;
      // for (i = 0; i < this.document.rightSide.card.length; i++) {
      //   var array = new Array();
      //   var section_counter = 1;
      //   for (j = 0; j < this.document.rightSide.card[i].section.length; j++) {
      //     [
      //       this.document.rightSide.card[i].section[j].value,
      //       this.document.rightSide.card[i].section[j].display,
      //     ] = this.getting_values_and_setting_values(
      //       this.document.rightSide.card[i].section[j].values_on_which_depend,
      //       i,
      //       this.document.rightSide.card[i].section[j].dependent_values
      //     );
      //     array.push(this.document.rightSide.card[i].section[j].value);
      //     if (this.document.rightSide.card[i].section[j].value > 0) {
      //       this.document.rightSide.card[i].section[j].displayed = true;
      //     } else {
      //       this.document.rightSide.card[i].section[j].displayed = false;
      //     }
      //   }
      //   if (array.some((el) => el > 0)) {
      //     if (this.document.leftSide.card[i].havesomevalue === true) {
      //       for (
      //         j = 0;
      //         j < this.document.rightSide.card[i].section.length;
      //         j++
      //       ) {
      //         if (
      //           this.document.rightSide.card[i].section[j]
      //             .heading_property_number === true &&
      //           this.document.rightSide.card[i].eye === true
      //         ) {
      //           //if(this.document.rightSide.card[i].){
      //           this.document.rightSide.card[i].section[
      //             j
      //           ].heading_value = value_counter;
      //           value_counter++;
      //           //break;
      //           //}
      //         }
      //         if (
      //           this.document.rightSide.card[i].section[j]
      //             .inner_heading_property_number === true
      //         ) {
      //           if (
      //             this.document.rightSide.card[i].section[j].displayed === true
      //           ) {
      //             this.document.rightSide.card[i].section[
      //               j
      //             ].inner_heading_value = section_counter;
      //             section_counter++;
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
    },
    eyefunc(item) {
      this.document.leftSide.card[item - 1].eye =
        !this.document.leftSide.card[item - 1].eye;
      this.document.rightSide.card[item - 1].eye =
        !this.document.rightSide.card[item - 1].eye;
    },
    drag_functionstart() {
      this.dragging = true;
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        if (this.document.leftSide.card[i].isactive == true) {
          this.pannal_active_drag_check = this.document.leftSide.card[i].name;
          // console.log(this.pannal_active_drag_check);
          return;
        }
      }
      this.pannal_active_drag_check = "";
    },
    drag_function() {
      this.dragging = false;
      var i, x, y;
      var rar = new Array();
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        y = this.document.leftSide.card[i]; //leftSide
        x = this.document.rightSide.card.find((k) => k.id === y.id);
        rar.push(x);
      }
      this.document.rightSide.card = rar;
      var id_count = 1;
      var rar_id = new Array();
      var lar_id = new Array();
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        var l1 = this.document.leftSide.card[i];
        l1.id = id_count;
        l1.isactive = false;
        lar_id.push(l1);
        var r1 = this.document.rightSide.card[i];
        r1.id = id_count;
        rar_id.push(r1);
        id_count++;
      }
      if (this.pannal_active_drag_check.length > 0) {
        for (i = 0; i < lar_id.length; i++) {
          if (lar_id[i].name == this.pannal_active_drag_check) {
            lar_id[i].isactive = true;
            this.opened_pannal = lar_id[i].id - 1;
            break;
          }
        }
      } else {
        this.opened_pannal = null;
      }
      this.document.leftSide.card = lar_id;
      this.document.rightSide.card = rar_id;
    },
    change_contract_title(value) {
      this.contract_title = value;
    },
    test() {
      var contract_title = "nhi chalyga STUDIOS12";
      store.commit("contractsavefunc", {
        title: contract_title,
      });
      store.commit("contractcardsavefunc", {
        title: contract_title,
        document: this.document,
      });
      store.commit("addnewcontractinadminversions", contract_title);
      var a = store.getters.checkVersionByAdminNameLatest("admin");
      store.commit("setcurrentadminversions", a[0].version);
    },
    test1() {
      // console.log(this.document);
    },
    // taptapeditoractivateleft(item) {
    //   item.tiptapedit = !item.tiptapedit;
    //   for (var i = 0; i < this.document.leftSide.card.length; i++) {
    //     // if (this.document.leftSide.card[i].isactive === true) {
    //     for (
    //       var j = 0;
    //       j < this.document.leftSide.card[i].section.length;
    //       j++
    //     ) {
    //       if (this.document.leftSide.card[i].section[j].eid !== item.eid) {
    //         this.document.leftSide.card[i].section[j].tiptapedit = false;
    //         if (
    //           this.document.leftSide.card[i].section[j].fields_display === true
    //         ) {
    //           for (
    //             var k = 0;
    //             k < this.document.leftSide.card[i].section[j].fields.length;
    //             k++
    //           ) {
    //             if (
    //               this.document.leftSide.card[i].section[j].fields[k].eid !=
    //               item.eid
    //             ) {
    //               this.document.leftSide.card[i].section[j].fields[
    //                 k
    //               ].tiptapedit = false;
    //             }
    //           }
    //         }
    //         if (
    //           this.document.leftSide.card[i].section[j].textfieldapproval ===
    //           true
    //         ) {
    //           for (
    //             k = 0;
    //             k <
    //             this.document.leftSide.card[i].section[j]
    //               .textfieldapprovalfields.length;
    //             k++
    //           ) {
    //             if (
    //               this.document.leftSide.card[i].section[j]
    //                 .textfieldapprovalfields[k].eid !== item.eid
    //             ) {
    //               this.document.leftSide.card[i].section[
    //                 j
    //               ].textfieldapprovalfields[k].tiptapedit = false;
    //             }
    //           }
    //         } else if (
    //           this.document.leftSide.card[i].section[j].dropselect_display ===
    //           true
    //         ) {
    //           // alert(this.document.leftSide.card[i].section[j].eid)
    //           for (
    //             k = 0;
    //             k < this.document.leftSide.card[i].section[j].dropselect.length;
    //             k++
    //           ) {
    //             if (
    //               this.document.leftSide.card[i].section[j].dropselect[k]
    //                 .eid !== item.eid
    //             ) {
    //               this.document.leftSide.card[i].section[j].dropselect[
    //                 k
    //               ].tiptapedit = false;
    //             }
    //           }
    //         }
    //       }
    //     }
    //     // }
    //   }
    // },
    delete_card(item) {
      if (this.document.leftSide.card.length > 1) {
        this.document.leftSide.card.splice(item.id - 1, 1);
        this.document.rightSide.card.splice(item.id - 1, 1);
        var count = 1;
        for (var i = 0; i < this.document.leftSide.card.length; i++) {
          this.document.leftSide.card[i].id = count;
          this.document.rightSide.card[i].id = count;
          count++;
        }
      }
    },

    add_new_card(item) {
      let left_copy_of_card = {
        id: null,
        name: "New Card",
        total_fields: 0,
        completed_fields: 0,
        linearprogressvalue: 0,
        isactive: false,
        isedited: false,
        havesomevalue: false,
        section: [
          // {
          //   eid: "s1",
          //   statement: "Unter welchem Namen betreiben Sie Ihren Amazon-Shop?",
          //   type: "textfield",
          //   length : 1,
          //   fields : [
          //     {
          //       eid: "s1-ms1",
          //       line: "",
          //       value:"",
          //       size: "col-12"
          //     },
          //   ],
          // },
        ],
      };
      let right_copy_of_card = {
        id: null,
        name: "New Card",
        section: [],
      };
      var i;
      if (item.id === this.document.leftSide.card.length) {
        left_copy_of_card.id = item.id + 1;
        this.document.leftSide.card.push(left_copy_of_card);
        right_copy_of_card.id = item.id + 1;
        this.document.rightSide.card.push(right_copy_of_card);
      } else {
        var count = 1;
        for (i = 0; i < this.document.leftSide.card.length; i++) {
          if (this.document.leftSide.card[i].id === item.id) {
            this.document.leftSide.card.splice(i + 1, 0, left_copy_of_card);
            this.document.rightSide.card.splice(i + 1, 0, right_copy_of_card);
            count++;
          } else {
            this.document.leftSide.card[i].id = count;
            this.document.rightSide.card[i].id = count;
            count++;
          }
        }
      }
    },
    duplicate_card(item) {
      var i;
      var left_copy_of_card, right_copy_of_card, obj;
      if (item.id === this.document.leftSide.card.length) {
        left_copy_of_card = JSON.parse(JSON.stringify(item));
        left_copy_of_card.id = item.id + 1;
        left_copy_of_card.section = this.clear_values_for_duplicate(
          left_copy_of_card.section
        );
        left_copy_of_card.isactive = false;
        this.document.leftSide.card.push(left_copy_of_card);
        obj = this.document.rightSide.card.find((o) => o.id === item.id);
        right_copy_of_card = JSON.parse(JSON.stringify(obj));
        right_copy_of_card.id = item.id + 1;
        this.document.rightSide.card.push(right_copy_of_card);
      } else {
        var count = 1;
        for (i = 0; i < this.document.leftSide.card.length; i++) {
          if (this.document.leftSide.card[i].id === item.id) {
            left_copy_of_card = JSON.parse(JSON.stringify(item));
            left_copy_of_card.id = null;
            left_copy_of_card.section = this.clear_values_for_duplicate(
              left_copy_of_card.section
            );
            left_copy_of_card.isactive = false;
            this.document.leftSide.card.splice(i + 1, 0, left_copy_of_card);
            obj = this.document.rightSide.card.find((o) => o.id === item.id);
            right_copy_of_card = JSON.parse(JSON.stringify(obj));
            this.document.rightSide.card.splice(i + 1, 0, right_copy_of_card);
            count++;
          } else {
            this.document.leftSide.card[i].id = count;
            this.document.rightSide.card[i].id = count;
            count++;
          }
        }
      }
    },
    clear_values_for_duplicate(section) {
      // console.log(section)
      // var array = []
      for (var i = 0; i < section.length; i++) {
        if (section[i].type === "textfield") {
          for (var j = 0; j < section[i].fields.length; j++) {
            section[i].fields[j].value = "";
          }
        } else if (section[i].type === "radio") {
          section[i].value = null;
        } else if (section[i].type === "checkbox") {
          section[i].value = [];
        } else if (section[i].type === "dropselect") {
          section[i].value = "";
        }
      }
      return section;
    },
    disable_isactive_property() {
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        this.document.leftSide.card[i].isactive = false;
      }
    },
    disable_and_enable_properties(item) {
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        if (this.document.leftSide.card[i].id === item.id) {
          this.document.leftSide.card[i].isactive =
            !this.document.leftSide.card[i].isactive;
          this.document.leftSide.card[i].eye = true;
          this.document.rightSide.card[i].eye = true;
        } else {
          this.document.leftSide.card[i].isactive = false;
        }
      }
    },
    getvalue() {
      // console.log(this.document);
    },
    getting_values_and_setting_values(values, card_no, dependent_values) {
      var array = new Array();
      for (var i = 0; i < values.length; i++) {
        if (typeof values[i] === "object") {
          for (const [key, value] of Object.entries(values[i])) {
            // console.log(key)
            // console.log(value)
            var e = this.find_in_left_side(
              key,
              this.document.leftSide.card[card_no].section
            );
            //console.log(e)
            if (e === value) {
              array.push(e);
            }
          }
        } else {
          var a = this.find_in_left_side(
            values[i],
            this.document.leftSide.card[card_no].section
          );
          array.push(a);
        }
      }
      var string = this.select_which_string_to_display(
        dependent_values,
        card_no
      );
      //console.log(array)
      var count = 0;
      for (var k = 0; k < array.length; k++) {
        if (array[k] !== undefined && array[k] !== "" && array[k] !== null) {
          if (array[k].length !== 0) {
            //  console.log(array[k].length)
            count = count + 1;
          } else {
            //console.log("a" +array[k].length)
            count = count + 1;
          }
        }
      }
      //console.log("c" + count)
      return [count, string];
    },
    select_which_string_to_display(dependent_values, card_no) {
      var i, j;
      var values_that_edit_string_array = new Array();
      for (i = 0; i < dependent_values.length; i++) {
        for (j = 0; j < dependent_values[i].depend_upon.length; j++) {
          if (typeof dependent_values[i].depend_upon[j] === "object") {
            for (const [key, value] of Object.entries(
              dependent_values[i].depend_upon[j]
            )) {
              // console.log(key)
              //console.log(value)
              var e = this.find_in_left_side(
                key,
                this.document.leftSide.card[card_no].section
              );
              var count_to_check_value_exist = 0;
              for (var k = 0; k < value.length; k++) {
                if (e === value[k]) {
                  values_that_edit_string_array.push(e);
                  count_to_check_value_exist++;
                  break;
                }
              }
              if (count_to_check_value_exist === 0) {
                values_that_edit_string_array.push(null);
              }
            }
          }
          //console.log(dependent_values[i].depend_upon[j])
          else {
            var values_that_edit_string = this.find_in_left_side(
              dependent_values[i].depend_upon[j],
              this.document.leftSide.card[card_no].section
            );
            values_that_edit_string_array.push(values_that_edit_string);
          }
        }
      }
      //console.log(values_that_edit_string_array)
      for (i = 0; i < dependent_values.length; i++) {
        var a = dependent_values[i].display;
        if (dependent_values[i].depend_upon.length === 0) {
          return a;
        }

        for (j = 0; j < values_that_edit_string_array.length; j++) {
          //console.log(dependent_values[i].depend_upon[j])
          //console.log(dependent_values[i].display)
          var val = values_that_edit_string_array[j];
          // console.log(val)
          if (val === null || val === "") {
            var res = a.split("[[" + j + "]]");
            var res1 = res[0].concat(res[1]);
            a = res1;
          } else {
            res = a.split("[[" + j + "]]");
            res1 = res[0].concat(val);
            res1 = res1.concat(res[1]);
            a = res1;
          }
        }
      }
      return a;
    },
    find_in_left_side(value, section) {
      for (var i = 0; i < section.length; i++) {
        if (section[i].type === "textfield") {
          for (var j = 0; j < section[i].fields.length; j++) {
            if (section[i].fields[j].eid === value) {
              return section[i].fields[j].value;
              //alert("aa")
            }
          }
        } else if (section[i].type === "radio") {
          if (section[i].eid === value) {
            return section[i].value;
          }
          if (section[i].textfieldapproval === true) {
            for (
              var k = 0;
              k < section[i].textfieldapprovalfields.length;
              k++
            ) {
              if (section[i].textfieldapprovalfields[k].eid === value) {
                return section[i].textfieldapprovalfields[k].value;
              }
            }
          } else if (section[i].dropselect_display === true) {
            for (k = 0; k < section[i].dropselect.length; k++) {
              if (section[i].dropselect[k].eid === value) {
                return section[i].dropselect[k].value;
              }
            }
          }
        } else if (section[i].type === "dropselect") {
          if (section[i].eid === value) {
            return section[i].value;
          }
          if (section[i].dropselect_display === true) {
            for (k = 0; k < section[i].dropselect.length; k++) {
              if (section[i].dropselect[k].eid === value) {
                return section[i].dropselect[k].value;
              }
            }
          }
        } else if (section[i].type === "checkbox") {
          if (section[i].eid === value) {
            if (section[i].value.length > 0) {
              return section[i].value;
            } else {
              return null;
            }
          }
        }
      }
    },
    complete_fields_checker_v2(section) {
      var array = [];
      for (var i = 0; i < section.length; i++) {
        if (section[i].type === "textfield") {
          for (var j = 0; j < section[i].fields.length; j++) {
            array.push(section[i].fields[j].value);
          }
        } else if (section[i].type === "radio") {
          array.push(section[i].value);
        } else if (section[i].type === "checkbox") {
          if (section[i].value.length !== 0) {
            array.push("checkbox");
          }
        } else if (section[i].type === "dropselect") {
          array.push(section[i].value);
        }
      }
      return array;
    },
    mounted_user() {
      var val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_user_name)
      );
      if (val != null) {
        if (
          val[
            localStorage.getItem("current_contract_title") +
              "-" +
              localStorage.getItem("current_contract_group_title")
          ] !== undefined
        ) {
          this.document = JSON.parse(
            val[
              localStorage.getItem("current_contract_title") +
                "-" +
                localStorage.getItem("current_contract_group_title")
            ]
          );
        }
        // else{
        //  this.preselectoption();
        // }
      }
      // else{
      //   this.preselectoption();
      // }
    },
    writefileandscreenshot_user() {
      let val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_user_name)
      );
      if (val == null) {
        val = {};
      }
      var a1 = localStorage.getItem("current_contract_title");
      var a2 = localStorage.getItem("current_contract_group_title");
      let b = JSON.stringify(this.document);
      val[a1 + "-" + a2] = b;
      localStorage.setItem(
        "contracts of " + store.state.current_user_name,
        JSON.stringify(val)
      );
      this.contractsdataforuser();
      store.dispatch("updatewritejson");
      //screenshot functionality
      const BrowserWindow = electron.remote.BrowserWindow;
      let win = BrowserWindow.getFocusedWindow();
      let wid = win.getSize()[0];
      //console.log(wid);
      win.webContents
        .capturePage({
          x: wid - Math.round(wid / 1.85),
          y: 50,
          width: wid,
          height: win.getSize()[1],
        })
        .then((img) => {
          var dir = "./thumbnails";
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          fs.writeFileSync(
            dir +
              "/" +
              a1 +
              "-" +
              a2 +
              "-" +
              store.state.current_user_name +
              "-u.png",
            img.toPNG(),
            { encoding: "utf8", flag: "w" }
          );
        });
    },
    contractsdataforuser() {
      var user_name = store.state.current_user_name;
      var data = localStorage.getItem("contracts of " + user_name);
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile(
        "./" + user_name + "- u.json",
        encrypteddata,
        function () {}
      );
    },
    add_percentage_user() {
      var a1 = localStorage.getItem("current_contract_title");
      var value = this.updatecontractpercentage_admin();
      store.commit("updatecontractpercentageuser", [
        a1,
        store.state.current_user_name,
        value,
      ]);
      store.commit("changeiseditedrecentcontracts", [
        a1,
        store.state.current_user_name,
      ]);
    },
    create_copy_of_contract_when_selected_specific_condition_admin() {
      var a1 = localStorage.getItem("contract_org_name");
      // console.log(a1)
      var a2 = localStorage.getItem("current_contract_group_title");
      // console.log(a2)
      this.add_original_contract_when_one_contract_updates(a1, a2);
    },
    add_original_contract_when_one_contract_updates(
      contact_org_name,
      group_title
    ) {
      var a = store.getters.checkByGroupName(group_title);
      if (a[0].keep_original_contract === true) {
        var b = this.copy_creation_of_contract(contact_org_name, group_title);
        // console.log(b)
        store.commit("addcontractgroupfunc", [a[0], b]);
        if (a[0].user.length !== 0) {
          store.commit("addcontractinallusercontractsingroup", [a[0], b]);
        }
        this.store_commited();
      }
    },
    store_commited() {
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
        store.state.current_admin_name
      );
      store.commit("setcurrentadmingroups", groups_by_specific_admin);
      //this.current_admin_groups = store.state.current_admin_groups;
      var users_by_specific_admin = store.getters.getallByAdminName(
        store.state.current_admin_name
      );
      store.commit("setcurrentadminusers", users_by_specific_admin);
      //this.current_admin_users = store.state.current_admin_users;
      store.dispatch("updatewritejson");
    },
    copy_creation_of_contract(contract_title, group_title) {
      let obj = this.current_admin_versions.find(
        (o) => o.contract_title === contract_title
      );

      let front_title =
        contract_title + "_Verträge_" + obj.contract_total_version;

      store.commit("copycontractsavefunc", {
        title: contract_title,
        front_title: front_title,
        group_title: group_title,
        admin_name: this.current_admin_name,
      });
      obj.contract_total_version = obj.contract_total_version + 1;
      this.current_admin_versions.find((o, i) => {
        if (o.contract_title === contract_title) {
          this.current_admin_versions[i] = {
            contract_title: contract_title,
            contract_total_version: obj.contract_total_version,
          };
          return true; // stop searching
        }
      });
      store.commit("updatedversionslist", [
        this.current_admin_versions,
        this.current_admin_name,
      ]);
      var b = store.getters.findcopycontract([front_title, group_title]);
      return b;
    },
    add_percentage_admin() {
      var a1 = localStorage.getItem("current_contract_title");
      var value = this.updatecontractpercentage_admin();
      // store.commit("updatecontractpercentage",[a1,store.state.current_admin_name,value])
      store.commit("updatecontractpercentageingroups", [
        a1,
        store.state.current_admin_name,
        value,
      ]);
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
        store.state.current_admin_name
      );
      this.$store.commit("setcurrentadmingroups", groups_by_specific_admin);
      store.commit("changeiseditedrecentcontracts", [
        a1,
        store.state.current_admin_name,
      ]);
    },
    updatecontractpercentage_admin() {
      var i;
      var sum_array_total = new Array();
      var sum_array_completed = new Array();
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        sum_array_total.push(this.document.leftSide.card[i].total_fields);
        sum_array_completed.push(
          this.document.leftSide.card[i].completed_fields
        );
      }
      var obt_sum = 0;
      var total_sum = 0;
      for (i = 0; i < sum_array_total.length; i++) {
        obt_sum = obt_sum + sum_array_completed[i];
        total_sum = total_sum + sum_array_total[i];
      }
      var answer = Math.round(this.percentage(obt_sum, total_sum));
      return answer;
    },
    percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    },
    complete_fields_checker(arr) {
      var data = arr;
      var counter = 0;
      var total_length = data.length;
      for (var i = 0; i < total_length; i++) {
        if (data[i]) {
          counter++;
        } else if (data[i] === false) {
          counter++;
        } else if (data[i] === 0) {
          counter++;
        }
      }
      // console.log("Filled = "+ counter)
      // console.log("Total = " + total_length)
      return counter;
    },
    mounted_admin() {
      this.current_admin_name = store.state.current_admin_name;
      this.current_admin_versions = store.state.current_admin_versions;
      var val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_admin_name)
      );
      if (val != null) {
        if (
          val[
            localStorage.getItem("current_contract_title") +
              "-" +
              localStorage.getItem("current_contract_group_title")
          ] !== undefined
        ) {
          this.document = JSON.parse(
            val[
              localStorage.getItem("current_contract_title") +
                "-" +
                localStorage.getItem("current_contract_group_title")
            ]
          );
        }
        // else{
        //  this.preselectoption();
        // }
      }
      // else{
      //   this.preselectoption();
      // }
    },
    writefileandscreenshot_admin() {
      let val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_admin_name)
      );
      if (val == null) {
        val = {};
      }
      //console.log(store.state.current_admin_name);
      //console.log(localStorage.getItem("current_contract_title"));
      var a1 = localStorage.getItem("current_contract_title");
      var a2 = localStorage.getItem("current_contract_group_title");
      let b = JSON.stringify(this.document);

      if (!(a1 + "-" + a2 in val)) {
        this.create_copy_of_contract_when_selected_specific_condition_admin();
      }
      val[a1 + "-" + a2] = b;
      //console.log(val);
      //console.log(this.contract);
      //this.contract_array.push(this.contract)
      localStorage.setItem(
        "contracts of " + store.state.current_admin_name,
        JSON.stringify(val)
      );
      this.contractsdataforadmin();
      store.dispatch("updatewritejson");
      //screenshot functionality
      const BrowserWindow = electron.remote.BrowserWindow;
      let win = BrowserWindow.getFocusedWindow();
      let wid = win.getSize()[0];
      //console.log(wid);
      win.webContents
        .capturePage({
          x: wid - Math.round(wid / 1.85),
          y: 50,
          width: wid,
          height: win.getSize()[1],
        })
        .then((img) => {
          var dir = "./thumbnails";
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          fs.writeFileSync(
            dir +
              "/" +
              a1 +
              "-" +
              a2 +
              "-" +
              store.state.current_admin_name +
              ".png",
            img.toPNG(),
            { encoding: "utf8", flag: "w" }
          );
        });
      localStorage.removeItem("current_contract_title");
      localStorage.removeItem("current_contract_group_title");
    },
    contractsdataforadmin() {
      var admin_name = store.state.current_admin_name;
      var data = localStorage.getItem("contracts of " + admin_name);
      //console.log(admin_name)
      //console.log(data)
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile("./" + admin_name + ".json", encrypteddata, function () {});
    },
  },
};
</script>
<style scoped lang="scss">
@media print {
  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif, serif;
    margin-right: 17mm;
    margin-left: 17mm;
  }
  footer {
    page-break-after: always;
  }
}
.c1 {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  position: relative;
  background-color: #d8d8d8;
}
@media print {
  @page {
    size: landscape;
  }
}
/* .addresspannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.addresspannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.offerpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.offerpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.conclusionpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.conclusionpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.auctionpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.auctionpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.contracttextpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.contracttextpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.contractcustomerpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.contractcustomerpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
} */
/* .shipcostpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.shipcostpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.transferpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
} */
input.radio {
  width: auto;
}
.transferpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
}
.node {
  margin-left: 2px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  transition: all 1000ms ease;
}
.node1 {
  margin-top: 3px;
  margin-left: 14.61%;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  display: inline-block;
  transition: all 1000ms ease;
}
.node2 {
  margin-top: 5px;
  margin-left: 5px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
  transition: all 1000ms ease;
}
.divider {
  margin-left: 11px;
  height: 48px;
  width: 5px;
  transition: all 800ms ease;
}
.smalldivider {
  margin-left: 11px;
  height: 44px;
  width: 5px;
  transition: all 800ms ease;
}
.largedivider {
  margin-left: 11px;
  transition: all 800ms ease;
}
li p {
  display: inline-block;
  margin-left: 5px;
}
li {
  list-style: none;
  line-height: 1px;
}
.c1color {
  background-color: #d8d8d8;
}
.c2color {
  background-color: #ffffff;
}
.c3changecolor {
  background-color: #ffa300;
}
.c3originalcolor {
  background-color: #ffffff;
}
.originallengthcolor {
  background-color: #d8d8d8;
}
.changelengthcolor {
  background-color: #ffa300;
}
.v-card {
  display: flex !important;
  flex-direction: column;
}
.v-card__text {
  overflow-y: scroll !important;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: #a0a0a0 transparent;
  scrollbar-width: thin;
}
.v-card__text::-webkit-scrollbar {
  width: 5px;
}
.v-card__text::-webkit-scrollbar-track {
  background: transparent;
}
.v-card__text::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 10px;
}
.expand::-webkit-scrollbar {
  width: 5px;
}
.expand {
  overflow-y: scroll;
  scrollbar-color: #a0a0a0 transparent;
  scrollbar-width: thin;
}
.expand::-webkit-scrollbar-track {
  background: transparent;
}
.expand::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 10px;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}
.Vertrag_Paragraph_Importieren_menu {
  margin-top: -2.2%;
  margin-left: 1%;
}
</style>

