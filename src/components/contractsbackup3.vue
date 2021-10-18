
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
                class="ml-n3 mb-5"
                flat
                accordion
              >
                <draggable
                  handle=".handleout"
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
                    <v-icon
                      class="mr-1 mt-n3 handleout"
                      style="cursor: all-scroll"
                      >mdi-drag</v-icon
                    >

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
                          style="position:relative"
                          @click="disable_and_enable_properties(item)"
                        >
                          <div style="display: flex" class="">
                            <div
                              class="pl-2 pt-3"
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
                              class="mb-n4 mt-1"
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
                                >
                                  <strong
                                    :inner-html.prop="
                                      item.name | truncateEnd(38)
                                    "
                                  ></strong>
                                </p>
                              </v-list-item>
                            </v-list>
                            <v-list
                              v-if="item.name_edit"
                              class="mt-3 mb-n3"
                              style="background-color: transparent"
                            >
                              <v-list-item
                                v-for="color in ['transparent']"
                                :key="color"
                                v-ripple="{ class: `${color}--text` }"
                              >
                                <div
                                  class=""
                                  @click.stop="onClick()"
                                  v-click-outside="onClickOutside3"
                                >
                                  <v-text-field
                                    outlined
                                    :color="maincolor.theme"
                                    dense
                                    rounded
                                    v-model="item.name"
                                    @keyup.enter="onClickOutside3"
                                  ></v-text-field>
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
                                  v-if="item.total_fields <= 9"
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
                                v-if="item.total_fields <= 9"
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
                                v-if="item.total_fields <= 9"
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

                        <v-expansion-panel-content style="position:relative">
                          <draggable
                            :list="item.section"
                            class="list-group"
                            handle=".handlein"
                          >
                              <!-- <div v-if="!item.signaturecard"> -->
                            <div
                              class=""
                              v-for="(item1, j) in item.section"
                              :key="j"
                            >
                              <!-- :inner-html.prop="item1.statement" -->
                              <div>
                                <div
                                  v-if="edit"
                                  style="word-break: break-word; display: flex"
                                >
                                  <v-btn icon class="mt-n2">
                                    <v-icon
                                      class="handlein"
                                      style="cursor: all-scroll"
                                      >mdi-drag-horizontal-variant</v-icon
                                    >
                                  </v-btn>
                                  <p
                                    v-click-outside="onClickOutside"
                                    v-if="item1.tiptapedit"
                                    v-on:dblclick="
                                      taptapeditoractivateleftitem1(item1)
                                    "
                                    style="word-break: break-word"
                                  >
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
                                                v-if="
                                                  actionName === 'paragraph'
                                                "
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
                                                  'is-active': isActive.heading(
                                                    {
                                                      level: 1,
                                                    }
                                                  ),
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
                                                  'is-active': isActive.heading(
                                                    {
                                                      level: 2,
                                                    }
                                                  ),
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
                                                  'is-active': isActive.heading(
                                                    {
                                                      level: 3,
                                                    }
                                                  ),
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
                                                v-if="
                                                  actionName === 'blockquote'
                                                "
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
                                                v-if="
                                                  actionName === 'underline'
                                                "
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
                                                  'is-active':
                                                    isActive.strike(),
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
                                                  'is-active':
                                                    isActive.italic(),
                                                }"
                                                @click="commands.italic"
                                              >
                                                <v-icon
                                                  >mdi-format-italic</v-icon
                                                >
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
                                                  actionName ===
                                                  'horizontal_rule'
                                                "
                                                class="menubar__button"
                                                @click="
                                                  commands.horizontal_rule
                                                "
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
                                                v-if="
                                                  actionName === 'list_check'
                                                "
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
                                    v-on:dblclick="
                                      taptapeditoractivateleftitem1(item1)
                                    "
                                    style="word-break: break-word"
                                    :inner-html.prop="item1.statement"
                                  ></p>
                                  <v-spacer></v-spacer>
                                  <div style="display: flex" class="mt-n2">
                                    <v-tooltip left>
                                      <template
                                        v-slot:activator="{ on, attrs }"
                                      >
                                        <v-btn
                                          v-on="on"
                                          v-bind="attrs"
                                          icon
                                          @click="
                                            edit_section_content_of_card(item1)
                                          "
                                        >
                                          <v-icon>mdi-select-compare</v-icon>
                                        </v-btn>
                                      </template>
                                      <span class="ml-2 mr-2"
                                        >Edit Content</span
                                      >
                                    </v-tooltip>

                                    <v-tooltip right>
                                      <template
                                        v-slot:activator="{ on, attrs }"
                                      >
                                        <v-btn
                                          v-on="on"
                                          v-bind="attrs"
                                          icon
                                          @click="
                                            deletecontentfromcard(
                                              item.id,
                                              item1.eid
                                            )
                                          "
                                        >
                                          <v-icon>mdi-delete-outline</v-icon>
                                        </v-btn>
                                      </template>
                                      <span class="ml-2 mr-2"
                                        >Delete Content</span
                                      >
                                    </v-tooltip>
                                  </div>
                                </div>

                                <div v-if="!item1.editcontent">
                                  <div
                                    class="row"
                                    v-if="item1.type === 'textfield'"
                                  >
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
                                  <div
                                    class="row"
                                    v-if="item1.type === 'dropselect'"
                                  >
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
                                        :menu-props="{
                                          bottom: true,
                                          offsetY: true,
                                        }"
                                        :color="maincolor.theme"
                                      ></v-select>
                                      <div
                                        v-if="item1.dropselect_display === true"
                                      >
                                        <div
                                          style=""
                                          class="col-12"
                                          v-for="(item3, l) in item1.dropselect"
                                          :key="l"
                                        >
                                          <div
                                            v-if="
                                              item3.on_which_to_show ===
                                              item1.value
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
                                                  taptapeditoractivateleft(
                                                    item3
                                                  )
                                                "
                                                style="word-break: break-word"
                                              >
                                                <v-card>
                                                  <div class="editor">
                                                    <editor-menu-bar
                                                      style="
                                                        background-color: #f5f5f5;
                                                      "
                                                      v-slot="{
                                                        commands,
                                                        isActive,
                                                      }"
                                                      :editor="editor1"
                                                    >
                                                      <div class="menubar">
                                                        <span
                                                          v-for="actionName in activeButtons"
                                                          :key="actionName"
                                                        >
                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'undo'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            @click="
                                                              commands.undo
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-undo</v-icon
                                                            >
                                                          </v-btn>

                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'redo'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            @click="
                                                              commands.redo
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-redo</v-icon
                                                            >
                                                          </v-btn>
                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'paragraph'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.paragraph(),
                                                            }"
                                                            @click="
                                                              commands.paragraph
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-paragraph</v-icon
                                                            >
                                                          </v-btn>
                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'h1'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.heading(
                                                                  {
                                                                    level: 1,
                                                                  }
                                                                ),
                                                            }"
                                                            @click="
                                                              commands.heading({
                                                                level: 1,
                                                              })
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-header-1</v-icon
                                                            >
                                                          </v-btn>

                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'h2'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.heading(
                                                                  {
                                                                    level: 2,
                                                                  }
                                                                ),
                                                            }"
                                                            @click="
                                                              commands.heading({
                                                                level: 2,
                                                              })
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-header-2</v-icon
                                                            >
                                                          </v-btn>

                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'h3'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.heading(
                                                                  {
                                                                    level: 3,
                                                                  }
                                                                ),
                                                            }"
                                                            @click="
                                                              commands.heading({
                                                                level: 3,
                                                              })
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-header-3</v-icon
                                                            >
                                                          </v-btn>
                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'blockquote'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.blockquote(),
                                                            }"
                                                            @click="
                                                              commands.blockquote
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-quote-close</v-icon
                                                            >
                                                          </v-btn>

                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'underline'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.underline(),
                                                            }"
                                                            @click="
                                                              commands.underline
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-underline</v-icon
                                                            >
                                                          </v-btn>
                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'strike'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.strike(),
                                                            }"
                                                            @click="
                                                              commands.strike
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-strikethrough</v-icon
                                                            >
                                                          </v-btn>
                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'italic'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.italic(),
                                                            }"
                                                            @click="
                                                              commands.italic
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-italic</v-icon
                                                            >
                                                          </v-btn>
                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'bold'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.bold(),
                                                            }"
                                                            @click="
                                                              commands.bold
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-bold</v-icon
                                                            >
                                                          </v-btn>

                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'code'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.code(),
                                                            }"
                                                            @click="
                                                              commands.code
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-code-tags</v-icon
                                                            >
                                                          </v-btn>

                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'horizontal_rule'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            @click="
                                                              commands.horizontal_rule
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-minus</v-icon
                                                            >
                                                          </v-btn>

                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'bullet_list'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.bullet_list(),
                                                            }"
                                                            @click="
                                                              commands.bullet_list
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-list-bulleted</v-icon
                                                            >
                                                          </v-btn>

                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'ordered_list'
                                                            "
                                                            class="
                                                              menubar__button
                                                            "
                                                            :class="{
                                                              'is-active':
                                                                isActive.ordered_list(),
                                                            }"
                                                            @click="
                                                              commands.ordered_list
                                                            "
                                                          >
                                                            <v-icon
                                                              >mdi-format-list-numbered</v-icon
                                                            >
                                                          </v-btn>
                                                          <v-btn
                                                            icon
                                                            v-if="
                                                              actionName ===
                                                              'list_check'
                                                            "
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
                                                      class="
                                                        editor__content
                                                        ml-2
                                                        mt-3
                                                        mr-2
                                                      "
                                                      :editor="editor1"
                                                    />
                                                  </div>
                                                </v-card>
                                              </p>
                                              <p
                                                v-if="!item3.tiptapedit"
                                                v-on:dblclick="
                                                  taptapeditoractivateleft(
                                                    item3
                                                  )
                                                "
                                                style="word-break: break-word"
                                                :inner-html.prop="
                                                  item3.statement
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
                                  </div>
                                  <div class="" v-if="item1.type === 'radio'">
                                    <v-radio-group
                                      class=""
                                      v-model="item1.value"
                                    >
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
                                              taptapeditoractivateleftitem2(
                                                item2
                                              )
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
                                                  style="
                                                    background-color: #f5f5f5;
                                                  "
                                                  v-slot="{
                                                    commands,
                                                    isActive,
                                                  }"
                                                  :editor="editor1"
                                                >
                                                  <div class="menubar">
                                                    <span
                                                      v-for="actionName in activeButtons"
                                                      :key="actionName"
                                                    >
                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName === 'undo'
                                                        "
                                                        class="menubar__button"
                                                        @click="commands.undo"
                                                      >
                                                        <v-icon
                                                          >mdi-undo</v-icon
                                                        >
                                                      </v-btn>

                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName === 'redo'
                                                        "
                                                        class="menubar__button"
                                                        @click="commands.redo"
                                                      >
                                                        <v-icon
                                                          >mdi-redo</v-icon
                                                        >
                                                      </v-btn>
                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName ===
                                                          'paragraph'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.paragraph(),
                                                        }"
                                                        @click="
                                                          commands.paragraph
                                                        "
                                                      >
                                                        <v-icon
                                                          >mdi-format-paragraph</v-icon
                                                        >
                                                      </v-btn>
                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName === 'h1'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.heading({
                                                              level: 1,
                                                            }),
                                                        }"
                                                        @click="
                                                          commands.heading({
                                                            level: 1,
                                                          })
                                                        "
                                                      >
                                                        <v-icon
                                                          >mdi-format-header-1</v-icon
                                                        >
                                                      </v-btn>

                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName === 'h2'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.heading({
                                                              level: 2,
                                                            }),
                                                        }"
                                                        @click="
                                                          commands.heading({
                                                            level: 2,
                                                          })
                                                        "
                                                      >
                                                        <v-icon
                                                          >mdi-format-header-2</v-icon
                                                        >
                                                      </v-btn>

                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName === 'h3'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.heading({
                                                              level: 3,
                                                            }),
                                                        }"
                                                        @click="
                                                          commands.heading({
                                                            level: 3,
                                                          })
                                                        "
                                                      >
                                                        <v-icon
                                                          >mdi-format-header-3</v-icon
                                                        >
                                                      </v-btn>
                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName ===
                                                          'blockquote'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.blockquote(),
                                                        }"
                                                        @click="
                                                          commands.blockquote
                                                        "
                                                      >
                                                        <v-icon
                                                          >mdi-format-quote-close</v-icon
                                                        >
                                                      </v-btn>

                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName ===
                                                          'underline'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.underline(),
                                                        }"
                                                        @click="
                                                          commands.underline
                                                        "
                                                      >
                                                        <v-icon
                                                          >mdi-format-underline</v-icon
                                                        >
                                                      </v-btn>
                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName ===
                                                          'strike'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.strike(),
                                                        }"
                                                        @click="commands.strike"
                                                      >
                                                        <v-icon
                                                          >mdi-format-strikethrough</v-icon
                                                        >
                                                      </v-btn>
                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName ===
                                                          'italic'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.italic(),
                                                        }"
                                                        @click="commands.italic"
                                                      >
                                                        <v-icon
                                                          >mdi-format-italic</v-icon
                                                        >
                                                      </v-btn>
                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName === 'bold'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.bold(),
                                                        }"
                                                        @click="commands.bold"
                                                      >
                                                        <v-icon
                                                          >mdi-format-bold</v-icon
                                                        >
                                                      </v-btn>

                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName === 'code'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.code(),
                                                        }"
                                                        @click="commands.code"
                                                      >
                                                        <v-icon
                                                          >mdi-code-tags</v-icon
                                                        >
                                                      </v-btn>

                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName ===
                                                          'horizontal_rule'
                                                        "
                                                        class="menubar__button"
                                                        @click="
                                                          commands.horizontal_rule
                                                        "
                                                      >
                                                        <v-icon
                                                          >mdi-minus</v-icon
                                                        >
                                                      </v-btn>

                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName ===
                                                          'bullet_list'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.bullet_list(),
                                                        }"
                                                        @click="
                                                          commands.bullet_list
                                                        "
                                                      >
                                                        <v-icon
                                                          >mdi-format-list-bulleted</v-icon
                                                        >
                                                      </v-btn>

                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName ===
                                                          'ordered_list'
                                                        "
                                                        class="menubar__button"
                                                        :class="{
                                                          'is-active':
                                                            isActive.ordered_list(),
                                                        }"
                                                        @click="
                                                          commands.ordered_list
                                                        "
                                                      >
                                                        <v-icon
                                                          >mdi-format-list-numbered</v-icon
                                                        >
                                                      </v-btn>
                                                      <v-btn
                                                        icon
                                                        v-if="
                                                          actionName ===
                                                          'list_check'
                                                        "
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
                                                  class="
                                                    editor__content
                                                    ml-2
                                                    mt-3
                                                    mr-2
                                                  "
                                                  :editor="editor1"
                                                />
                                              </div>
                                            </v-card>
                                          </p>
                                          <div v-if="!item2.tiptapedit">
                                            <v-radio
                                              :color="maincolor.theme"
                                              class="mt-2"
                                              :value="item2.value"
                                            >
                                              <template v-slot:label>
                                                <li
                                                  v-on:dblclick="
                                                    taptapeditoractivateleftitem2(
                                                      item2
                                                    )
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
                                    <div
                                      v-if="item1.textfieldapproval === true"
                                    >
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
                                            item3.on_which_to_show ===
                                            item1.value
                                          "
                                        >
                                          <div
                                            v-if="edit"
                                            style="word-break: break-word"
                                          >
                                            <p
                                              v-if="item3.tiptapedit"
                                              v-on:dblclick="
                                                taptapeditoractivateleftitem3(
                                                  item3
                                                )
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
                                                    style="
                                                      background-color: #f5f5f5;
                                                    "
                                                    v-slot="{
                                                      commands,
                                                      isActive,
                                                    }"
                                                    :editor="editor1"
                                                  >
                                                    <div class="menubar">
                                                      <span
                                                        v-for="actionName in activeButtons"
                                                        :key="actionName"
                                                      >
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'undo'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          @click="commands.undo"
                                                        >
                                                          <v-icon
                                                            >mdi-undo</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'redo'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          @click="commands.redo"
                                                        >
                                                          <v-icon
                                                            >mdi-redo</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'paragraph'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.paragraph(),
                                                          }"
                                                          @click="
                                                            commands.paragraph
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-paragraph</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName === 'h1'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.heading({
                                                                level: 1,
                                                              }),
                                                          }"
                                                          @click="
                                                            commands.heading({
                                                              level: 1,
                                                            })
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-header-1</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName === 'h2'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.heading({
                                                                level: 2,
                                                              }),
                                                          }"
                                                          @click="
                                                            commands.heading({
                                                              level: 2,
                                                            })
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-header-2</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName === 'h3'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.heading({
                                                                level: 3,
                                                              }),
                                                          }"
                                                          @click="
                                                            commands.heading({
                                                              level: 3,
                                                            })
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-header-3</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'blockquote'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.blockquote(),
                                                          }"
                                                          @click="
                                                            commands.blockquote
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-quote-close</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'underline'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.underline(),
                                                          }"
                                                          @click="
                                                            commands.underline
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-underline</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'strike'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.strike(),
                                                          }"
                                                          @click="
                                                            commands.strike
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-strikethrough</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'italic'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.italic(),
                                                          }"
                                                          @click="
                                                            commands.italic
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-italic</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'bold'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.bold(),
                                                          }"
                                                          @click="commands.bold"
                                                        >
                                                          <v-icon
                                                            >mdi-format-bold</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'code'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.code(),
                                                          }"
                                                          @click="commands.code"
                                                        >
                                                          <v-icon
                                                            >mdi-code-tags</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'horizontal_rule'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          @click="
                                                            commands.horizontal_rule
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-minus</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'bullet_list'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.bullet_list(),
                                                          }"
                                                          @click="
                                                            commands.bullet_list
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-list-bulleted</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'ordered_list'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.ordered_list(),
                                                          }"
                                                          @click="
                                                            commands.ordered_list
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-list-numbered</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'list_check'
                                                          "
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
                                                    class="
                                                      editor__content
                                                      ml-2
                                                      mt-3
                                                      mr-2
                                                    "
                                                    :editor="editor1"
                                                  />
                                                </div>
                                              </v-card>
                                            </p>
                                            <p
                                              v-if="!item3.tiptapedit"
                                              v-on:dblclick="
                                                taptapeditoractivateleftitem3(
                                                  item3
                                                )
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

                                    <div
                                      v-if="item1.dropselect_display === true"
                                    >
                                      <div
                                        style=""
                                        class="col-12"
                                        v-for="(item3, l) in item1.dropselect"
                                        :key="l"
                                      >
                                        <div
                                          v-if="
                                            item3.on_which_to_show ===
                                            item1.value
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
                                                taptapeditoractivateleftitem4(
                                                  item3
                                                )
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
                                                    style="
                                                      background-color: #f5f5f5;
                                                    "
                                                    v-slot="{
                                                      commands,
                                                      isActive,
                                                    }"
                                                    :editor="editor1"
                                                  >
                                                    <div class="menubar">
                                                      <span
                                                        v-for="actionName in activeButtons"
                                                        :key="actionName"
                                                      >
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'undo'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          @click="commands.undo"
                                                        >
                                                          <v-icon
                                                            >mdi-undo</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'redo'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          @click="commands.redo"
                                                        >
                                                          <v-icon
                                                            >mdi-redo</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'paragraph'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.paragraph(),
                                                          }"
                                                          @click="
                                                            commands.paragraph
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-paragraph</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName === 'h1'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.heading({
                                                                level: 1,
                                                              }),
                                                          }"
                                                          @click="
                                                            commands.heading({
                                                              level: 1,
                                                            })
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-header-1</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName === 'h2'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.heading({
                                                                level: 2,
                                                              }),
                                                          }"
                                                          @click="
                                                            commands.heading({
                                                              level: 2,
                                                            })
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-header-2</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName === 'h3'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.heading({
                                                                level: 3,
                                                              }),
                                                          }"
                                                          @click="
                                                            commands.heading({
                                                              level: 3,
                                                            })
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-header-3</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'blockquote'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.blockquote(),
                                                          }"
                                                          @click="
                                                            commands.blockquote
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-quote-close</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'underline'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.underline(),
                                                          }"
                                                          @click="
                                                            commands.underline
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-underline</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'strike'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.strike(),
                                                          }"
                                                          @click="
                                                            commands.strike
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-strikethrough</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'italic'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.italic(),
                                                          }"
                                                          @click="
                                                            commands.italic
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-italic</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'bold'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.bold(),
                                                          }"
                                                          @click="commands.bold"
                                                        >
                                                          <v-icon
                                                            >mdi-format-bold</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'code'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.code(),
                                                          }"
                                                          @click="commands.code"
                                                        >
                                                          <v-icon
                                                            >mdi-code-tags</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'horizontal_rule'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          @click="
                                                            commands.horizontal_rule
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-minus</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'bullet_list'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.bullet_list(),
                                                          }"
                                                          @click="
                                                            commands.bullet_list
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-list-bulleted</v-icon
                                                          >
                                                        </v-btn>

                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'ordered_list'
                                                          "
                                                          class="
                                                            menubar__button
                                                          "
                                                          :class="{
                                                            'is-active':
                                                              isActive.ordered_list(),
                                                          }"
                                                          @click="
                                                            commands.ordered_list
                                                          "
                                                        >
                                                          <v-icon
                                                            >mdi-format-list-numbered</v-icon
                                                          >
                                                        </v-btn>
                                                        <v-btn
                                                          icon
                                                          v-if="
                                                            actionName ===
                                                            'list_check'
                                                          "
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
                                                    class="
                                                      editor__content
                                                      ml-2
                                                      mt-3
                                                      mr-2
                                                    "
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
                                                taptapeditoractivateleftitem4(
                                                  item3
                                                )
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
                                  <div
                                    class="row"
                                    v-if="item1.type === 'checkbox'"
                                  >
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
                                          <v-card>
                                            <div class="editor">
                                              <editor-menu-bar
                                                style="
                                                  background-color: #f5f5f5;
                                                "
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
                                                      v-if="
                                                        actionName === 'undo'
                                                      "
                                                      class="menubar__button"
                                                      @click="commands.undo"
                                                    >
                                                      <v-icon>mdi-undo</v-icon>
                                                    </v-btn>

                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName === 'redo'
                                                      "
                                                      class="menubar__button"
                                                      @click="commands.redo"
                                                    >
                                                      <v-icon>mdi-redo</v-icon>
                                                    </v-btn>
                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName ===
                                                        'paragraph'
                                                      "
                                                      class="menubar__button"
                                                      :class="{
                                                        'is-active':
                                                          isActive.paragraph(),
                                                      }"
                                                      @click="
                                                        commands.paragraph
                                                      "
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
                                                        'is-active':
                                                          isActive.heading({
                                                            level: 1,
                                                          }),
                                                      }"
                                                      @click="
                                                        commands.heading({
                                                          level: 1,
                                                        })
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
                                                        'is-active':
                                                          isActive.heading({
                                                            level: 2,
                                                          }),
                                                      }"
                                                      @click="
                                                        commands.heading({
                                                          level: 2,
                                                        })
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
                                                        'is-active':
                                                          isActive.heading({
                                                            level: 3,
                                                          }),
                                                      }"
                                                      @click="
                                                        commands.heading({
                                                          level: 3,
                                                        })
                                                      "
                                                    >
                                                      <v-icon
                                                        >mdi-format-header-3</v-icon
                                                      >
                                                    </v-btn>
                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName ===
                                                        'blockquote'
                                                      "
                                                      class="menubar__button"
                                                      :class="{
                                                        'is-active':
                                                          isActive.blockquote(),
                                                      }"
                                                      @click="
                                                        commands.blockquote
                                                      "
                                                    >
                                                      <v-icon
                                                        >mdi-format-quote-close</v-icon
                                                      >
                                                    </v-btn>

                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName ===
                                                        'underline'
                                                      "
                                                      class="menubar__button"
                                                      :class="{
                                                        'is-active':
                                                          isActive.underline(),
                                                      }"
                                                      @click="
                                                        commands.underline
                                                      "
                                                    >
                                                      <v-icon
                                                        >mdi-format-underline</v-icon
                                                      >
                                                    </v-btn>
                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName === 'strike'
                                                      "
                                                      class="menubar__button"
                                                      :class="{
                                                        'is-active':
                                                          isActive.strike(),
                                                      }"
                                                      @click="commands.strike"
                                                    >
                                                      <v-icon
                                                        >mdi-format-strikethrough</v-icon
                                                      >
                                                    </v-btn>
                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName === 'italic'
                                                      "
                                                      class="menubar__button"
                                                      :class="{
                                                        'is-active':
                                                          isActive.italic(),
                                                      }"
                                                      @click="commands.italic"
                                                    >
                                                      <v-icon
                                                        >mdi-format-italic</v-icon
                                                      >
                                                    </v-btn>
                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName === 'bold'
                                                      "
                                                      class="menubar__button"
                                                      :class="{
                                                        'is-active':
                                                          isActive.bold(),
                                                      }"
                                                      @click="commands.bold"
                                                    >
                                                      <v-icon
                                                        >mdi-format-bold</v-icon
                                                      >
                                                    </v-btn>

                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName === 'code'
                                                      "
                                                      class="menubar__button"
                                                      :class="{
                                                        'is-active':
                                                          isActive.code(),
                                                      }"
                                                      @click="commands.code"
                                                    >
                                                      <v-icon
                                                        >mdi-code-tags</v-icon
                                                      >
                                                    </v-btn>

                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName ===
                                                        'horizontal_rule'
                                                      "
                                                      class="menubar__button"
                                                      @click="
                                                        commands.horizontal_rule
                                                      "
                                                    >
                                                      <v-icon>mdi-minus</v-icon>
                                                    </v-btn>

                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName ===
                                                        'bullet_list'
                                                      "
                                                      class="menubar__button"
                                                      :class="{
                                                        'is-active':
                                                          isActive.bullet_list(),
                                                      }"
                                                      @click="
                                                        commands.bullet_list
                                                      "
                                                    >
                                                      <v-icon
                                                        >mdi-format-list-bulleted</v-icon
                                                      >
                                                    </v-btn>

                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName ===
                                                        'ordered_list'
                                                      "
                                                      class="menubar__button"
                                                      :class="{
                                                        'is-active':
                                                          isActive.ordered_list(),
                                                      }"
                                                      @click="
                                                        commands.ordered_list
                                                      "
                                                    >
                                                      <v-icon
                                                        >mdi-format-list-numbered</v-icon
                                                      >
                                                    </v-btn>
                                                    <v-btn
                                                      icon
                                                      v-if="
                                                        actionName ===
                                                        'list_check'
                                                      "
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
                                                class="
                                                  editor__content
                                                  ml-2
                                                  mt-3
                                                  mr-2
                                                "
                                                :editor="editor1"
                                              />
                                            </div>
                                          </v-card>
                                        </p>
                                        <div v-if="!item2.tiptapedit">
                                          <div class="row">
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
                                            <!-- <v-icon class="mt-n4"
                                              >mdi-checkbox-blank-outline</v-icon
                                            > -->
                                            <!-- <p
                                              class="pl-2"
                                              v-on:dblclick="
                                                taptapeditoractivateleftitem5(
                                                  item2
                                                )
                                              "
                                              :inner-html.prop="
                                                item2.line | truncateEnd(36)
                                              "
                                            ></p> -->
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
                                        <!-- <v-checkbox
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
                                        </v-checkbox> -->
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div v-if="item1.editcontent">
                                  <div style="" class="mt-2 mb-3">
                                    <v-card
                                      elevation="0"
                                      outlined
                                      min-width="480"
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
                                            <div
                                              style="display: flex"
                                              class="ml-6 mt-4"
                                            >
                                              <p class="">Type :</p>
                                              <v-text-field
                                                dense
                                                v-model="editfieldshow"
                                                @click.stop="onClick()"
                                                :color="maincolor.theme"
                                                class="ml-5 mt-n1"
                                                placeholder=""
                                              >
                                              </v-text-field>
                                            </div>
                                            <v-spacer></v-spacer>
                                            <template v-slot:actions>
                                              <v-icon class="mr-6"
                                                >mdi-menu-down</v-icon
                                              >
                                            </template>
                                          </v-expansion-panel-header>
                                          <v-expansion-panel-content>
                                            <v-list flat dense>
                                              <v-list-item
                                                @click="
                                                  editfieldfunc(
                                                    item11.title,
                                                    item1
                                                  )
                                                "
                                                v-for="(
                                                  item11, index
                                                ) in editfielditems"
                                                :key="index"
                                              >
                                                <v-list-item-icon class="pl-2">
                                                  <v-icon
                                                    v-text="item11.icon"
                                                    >{{ item11.icon }}</v-icon
                                                  >
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                  <v-list-item-subtitle
                                                    v-text="item11.title"
                                                  >
                                                  </v-list-item-subtitle>
                                                </v-list-item-content>
                                              </v-list-item>
                                            </v-list>
                                          </v-expansion-panel-content>
                                        </v-expansion-panel>
                                      </v-expansion-panels>
                                    </v-card>
                                  </div>
                                  <div
                                    v-if="editfieldshow === 'Text Field'"
                                    class="ml-6 mt-6"
                                  >
                                    <div
                                      style="display: flex"
                                      v-for="(
                                        item1, index
                                      ) in Text_filed_items1"
                                      :key="index"
                                      class="ml-3"
                                    >
                                      <v-btn
                                        class="mt-n2"
                                        @click="
                                          left_side_edit_delete_text_fields(
                                            item1
                                          )
                                        "
                                        icon
                                        v-if="
                                          item1.icon === 'mdi-label-outline'
                                        "
                                      >
                                        <v-icon small
                                          >mdi-delete-outline</v-icon
                                        >
                                      </v-btn>
                                      <v-btn
                                        icon
                                        class="mt-n2"
                                        @click="textfiledfuncnew(item1)"
                                      >
                                        <v-icon small>{{ item1.icon }}</v-icon>
                                      </v-btn>
                                      <p
                                        class="ml-6"
                                        style="cursor: pointer"
                                        v-if="item1.value && item1.title"
                                        @click="textfiledfuncnew(item1)"
                                      >
                                        {{ item1.title }}
                                      </p>
                                      <p
                                        class="ml-6"
                                        v-if="
                                          item1.value &&
                                          !item1.title &&
                                          item1.type === 'text-field'
                                        "
                                      >
                                        Enter Statement
                                      </p>
                                      <p
                                        class=""
                                        v-if="
                                          item1.value &&
                                          !item1.title &&
                                          item1.type === 'label'
                                        "
                                      >
                                        Add Label
                                      </p>
                                      <v-text-field
                                        v-if="
                                          !item1.value &&
                                          item1.type === 'text-field'
                                        "
                                        :color="maincolor.theme"
                                        dense
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        rounded
                                        v-model="item1.title"
                                        :placeholder="item1.title"
                                        @keyup.enter="item1.value = true"
                                      >
                                      </v-text-field>
                                      <v-text-field
                                        v-if="
                                          !item1.value && item1.type === 'label'
                                        "
                                        dense
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        :color="maincolor.theme"
                                        rounded
                                        v-model="item1.title"
                                        :placeholder="item1.title"
                                        @keyup.enter="item1.value = true"
                                      >
                                      </v-text-field>
                                      <div
                                        v-if="
                                          !item1.value &&
                                          item1.type === 'slider'
                                        "
                                        style="width: 46em"
                                        class="mb-n3 mt-n1"
                                      >
                                        <v-slider
                                          max="12"
                                          min="3"
                                          :thumb-color="maincolor.theme"
                                          thumb-label="always"
                                          :color="maincolor.theme"
                                          :track-color="maincolor.bar"
                                          v-model="item1.slidervalue"
                                          step="1"
                                        ></v-slider>
                                      </div>
                                    </div>
                                    <v-card-actions class="mb-2">
                                      <v-spacer></v-spacer>
                                      <v-btn
                                        class="mt-n4"
                                        style="
                                          text-transform: none;
                                          font-family: raleway;
                                          font-size: 14px;
                                          font-weight: 700;
                                          color: #474747;
                                        "
                                        text
                                        @click="
                                          textfielditemssubmissionnew(
                                            item.id,
                                            item1
                                          )
                                        "
                                      >
                                        Anlegen
                                      </v-btn>
                                    </v-card-actions>
                                  </div>
                                  <div
                                    v-if="editfieldshow === 'Check Boxes'"
                                    class="ml-6 mt-6"
                                  >
                                    <div
                                      style="display: flex"
                                      v-for="(item3, index) in checkbox_items1"
                                      :key="index"
                                      class="ml-3"
                                    >
                                      <v-btn
                                        class="mt-n2"
                                        @click="
                                          leftside_edit_delete_checkbox(item3)
                                        "
                                        icon
                                        v-if="
                                          item3.icon === 'mdi-label-outline'
                                        "
                                      >
                                        <v-icon small
                                          >mdi-delete-outline</v-icon
                                        >
                                      </v-btn>
                                      <v-btn
                                        icon
                                        class="mt-n2"
                                        @click="checkboxfuncnew(item3)"
                                      >
                                        <v-icon small>{{ item3.icon }}</v-icon>
                                      </v-btn>
                                      <p
                                        class="ml-6"
                                        style="cursor: pointer"
                                        v-if="item3.value && item3.title"
                                        @click="checkboxfuncnew(item3)"
                                      >
                                        {{ item3.title }}
                                      </p>
                                      <p
                                        class="ml-6"
                                        v-if="
                                          item3.value &&
                                          !item3.title &&
                                          item3.type === 'text-field'
                                        "
                                      >
                                        Enter Statement
                                      </p>
                                      <p
                                        class="ml-2"
                                        v-if="
                                          item3.value &&
                                          !item3.title &&
                                          item3.type === 'label'
                                        "
                                      >
                                        Add Label
                                      </p>
                                      <p
                                        class="ml-6"
                                        v-if="
                                          item3.value &&
                                          !item3.title &&
                                          item3.type === 'right-side-text'
                                        "
                                      >
                                        Add Right Side Text
                                      </p>

                                      <v-text-field
                                        v-if="
                                          !item3.value &&
                                          item3.type === 'text-field'
                                        "
                                        dense
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        :color="maincolor.theme"
                                        rounded
                                        v-model="item3.title"
                                        :placeholder="item3.title"
                                        @keyup.enter="item3.value = true"
                                      >
                                      </v-text-field>
                                      <v-text-field
                                        v-if="
                                          !item3.value &&
                                          item3.type === 'right-side-text'
                                        "
                                        dense
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        :color="maincolor.theme"
                                        rounded
                                        v-model="item3.title"
                                        :placeholder="item3.title"
                                        @keyup.enter="item3.value = true"
                                      >
                                      </v-text-field>
                                      <v-text-field
                                        v-if="
                                          !item3.value && item3.type === 'label'
                                        "
                                        dense
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        rounded
                                        :color="maincolor.theme"
                                        v-model="item3.title"
                                        :placeholder="item3.title"
                                        @keyup.enter="item3.value = true"
                                      >
                                      </v-text-field>
                                    </div>
                                    <v-card-actions class="mb-2">
                                      <v-spacer></v-spacer>
                                      <v-btn
                                        class="mt-n4"
                                        style="
                                          text-transform: none;
                                          font-family: raleway;
                                          font-size: 14px;
                                          font-weight: 700;
                                          color: #474747;
                                        "
                                        text
                                        @click="
                                          checkboxitemssubmissionnew(
                                            item.id,
                                            item1
                                          )
                                        "
                                      >
                                        Anlegen
                                      </v-btn>
                                    </v-card-actions>
                                  </div>
                                  <div
                                    v-if="editfieldshow === 'Drop Down'"
                                    class="ml-6 mt-6"
                                  >
                                    <div
                                      style="display: flex"
                                      v-for="(item4, index) in drop_down_items1"
                                      :key="index"
                                      class="ml-3"
                                    >
                                      <v-btn
                                        class="mt-n2"
                                        @click="
                                          leftside_edit_delete_dropdown(item4)
                                        "
                                        icon
                                        v-if="
                                          item4.icon ===
                                          'mdi-arrow-down-drop-circle-outline'
                                        "
                                      >
                                        <v-icon small
                                          >mdi-delete-outline</v-icon
                                        >
                                      </v-btn>
                                      <v-btn
                                        icon
                                        class="mt-n2"
                                        @click="dropdownfuncnew(item4)"
                                      >
                                        <v-icon small>{{ item4.icon }}</v-icon>
                                      </v-btn>
                                      <p
                                        class="ml-6"
                                        style="cursor: pointer"
                                        v-if="item4.value && item4.title"
                                        @click="dropdownfuncnew(item4)"
                                      >
                                        {{ item4.title }}
                                      </p>
                                      <p
                                        class="ml-6"
                                        v-if="
                                          item4.value &&
                                          !item4.title &&
                                          item4.type === 'text-field'
                                        "
                                      >
                                        Enter Statement
                                      </p>
                                      <p
                                        class="ml-2"
                                        v-if="
                                          item4.value &&
                                          !item4.title &&
                                          item4.type === 'drop-down-option'
                                        "
                                      >
                                        Add Drop Down Option
                                      </p>

                                      <v-text-field
                                        v-if="
                                          !item4.value &&
                                          item4.type === 'text-field'
                                        "
                                        dense
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        :color="maincolor.theme"
                                        rounded
                                        v-model="item4.title"
                                        :placeholder="item4.title"
                                        @keyup.enter="item4.value = true"
                                      >
                                      </v-text-field>
                                      <v-text-field
                                        v-if="
                                          !item4.value &&
                                          item4.type === 'drop-down-option'
                                        "
                                        dense
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        rounded
                                        v-model="item4.title"
                                        :color="maincolor.theme"
                                        :placeholder="item4.title"
                                        @keyup.enter="item4.value = true"
                                      >
                                      </v-text-field>
                                    </div>
                                    <v-card-actions class="mb-2">
                                      <v-spacer></v-spacer>
                                      <v-btn
                                        class="mt-n4"
                                        style="
                                          text-transform: none;
                                          font-family: raleway;
                                          font-size: 14px;
                                          font-weight: 700;
                                          color: #474747;
                                        "
                                        text
                                        @click="
                                          dropdownoptionitemssubmissionnew(
                                            item.id,
                                            item1
                                          )
                                        "
                                      >
                                        Anlegen
                                      </v-btn>
                                    </v-card-actions>
                                  </div>
                                  <div
                                    v-if="editfieldshow === 'Radio Button'"
                                    class="ml-6 mt-6"
                                  >
                                    <div
                                      style="display: flex"
                                      v-for="(
                                        item5, index
                                      ) in radio_button_items1"
                                      :key="index"
                                      class="ml-3"
                                    >
                                      <v-btn
                                        class="mt-n2"
                                        @click="
                                          leftside_edit_delete_radiobtn(item5)
                                        "
                                        icon
                                        v-if="
                                          item5.icon === 'mdi-label-outline'
                                        "
                                      >
                                        <v-icon small
                                          >mdi-delete-outline</v-icon
                                        >
                                      </v-btn>
                                      <v-btn
                                        icon
                                        class="mt-n2"
                                        @click="radiobuttonfuncnew(item5)"
                                      >
                                        <v-icon small>{{ item5.icon }}</v-icon>
                                      </v-btn>
                                      <p
                                        class="ml-6"
                                        style="cursor: pointer"
                                        v-if="item5.value && item5.title"
                                        @click="radiobuttonfuncnew(item5)"
                                      >
                                        {{ item5.title }}
                                      </p>
                                      <p
                                        class="ml-6"
                                        v-if="
                                          item5.value &&
                                          !item5.title &&
                                          item5.type === 'text-field'
                                        "
                                      >
                                        Enter Statement
                                      </p>
                                      <p
                                        class="ml-2"
                                        v-if="
                                          item5.value &&
                                          !item5.title &&
                                          item5.type === 'label'
                                        "
                                      >
                                        Add Label
                                      </p>
                                      <p
                                        class="ml-6"
                                        v-if="
                                          item5.value &&
                                          !item5.title &&
                                          item5.type === 'right-side-text'
                                        "
                                      >
                                        Add Radio text on Right Side
                                      </p>

                                      <v-text-field
                                        v-if="
                                          !item5.value &&
                                          item5.type === 'text-field'
                                        "
                                        dense
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        :color="maincolor.theme"
                                        rounded
                                        v-model="item5.title"
                                        :placeholder="item5.title"
                                        @keyup.enter="item5.value = true"
                                      >
                                      </v-text-field>
                                      <v-text-field
                                        v-if="
                                          !item5.value &&
                                          item5.type === 'right-side-text'
                                        "
                                        dense
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        rounded
                                        :color="maincolor.theme"
                                        v-model="item5.title"
                                        :placeholder="item5.title"
                                        @keyup.enter="item5.value = true"
                                      >
                                      </v-text-field>
                                      <v-text-field
                                        v-if="
                                          !item5.value && item5.type === 'label'
                                        "
                                        dense
                                        :color="maincolor.theme"
                                        class="mt-n2 mr-4 mb-n3"
                                        outlined
                                        rounded
                                        v-model="item5.title"
                                        :placeholder="item5.title"
                                        @keyup.enter="item5.value = true"
                                      >
                                      </v-text-field>
                                    </div>
                                    <v-card-actions class="mb-2">
                                      <v-spacer></v-spacer>
                                      <v-btn
                                        class="mt-n4"
                                        style="
                                          text-transform: none;
                                          font-family: raleway;
                                          font-size: 14px;
                                          font-weight: 700;
                                          color: #474747;
                                        "
                                        text
                                        @click="
                                          radiobuttonitemssubmissionnew(
                                            item.id,
                                            item1
                                          )
                                        "
                                      >
                                        Anlegen
                                      </v-btn>
                                    </v-card-actions>
                                  </div>
                                </div>
                              </div>
                            </div>
                               <!-- </div> -->
                                 
                          </draggable>
                          <div class="mt-2 mb-3" v-if="adddata">
                            <v-card
                              elevation="0"
                              outlined
                              min-width="480"
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
                                    style="height: 1em; border-radius: 20px"
                                  >
                                    <div
                                      style="display: flex"
                                      class="ml-8 mt-6"
                                    >
                                      <p>Type :</p>
                                      <v-text-field
                                        dense
                                        v-model="cardfiledshow"
                                        @click.stop="onClick()"
                                        :color="maincolor.theme"
                                        class="mt-n1 ml-4"
                                        placeholder=""
                                      >
                                      </v-text-field>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <template v-slot:actions>
                                      <v-icon class="mr-6"
                                        >mdi-menu-down</v-icon
                                      >
                                    </template>
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    <v-list flat dense>
                                      <v-list-item
                                        @click="cardfiledfunc(item11.title)"
                                        v-for="(
                                          item11, index
                                        ) in editfielditems"
                                        :key="index"
                                      >
                                        <v-list-item-icon class="pl-2">
                                          <v-icon v-text="item11.icon">{{
                                            item11.icon
                                          }}</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                          <v-list-item-subtitle
                                            v-text="item11.title"
                                          >
                                          </v-list-item-subtitle>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </v-list>
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-card>

                            <div
                              v-if="cardfiledshow === 'Text Field'"
                              class="ml-6 mt-6"
                            >
                              <div
                                style="display: flex"
                                v-for="(item1, index) in Text_filed_items"
                                :key="index"
                                class="ml-3"
                              >
                                <v-btn
                                  class="mt-n2"
                                  @click="left_side_delete_text_fields(item1)"
                                  icon
                                  v-if="item1.icon === 'mdi-label-outline'"
                                >
                                  <v-icon small>mdi-delete-outline</v-icon>
                                </v-btn>
                                <v-btn
                                  icon
                                  class="mt-n2"
                                  @click="textfiledfunc(item1)"
                                >
                                  <v-icon small>{{ item1.icon }}</v-icon>
                                </v-btn>
                                <p
                                  class="ml-6"
                                  style="cursor: pointer"
                                  v-if="item1.value && item1.title"
                                  @click="textfiledfunc(item1)"
                                >
                                  {{ item1.title }}
                                </p>
                                <p
                                  class="ml-6"
                                  v-if="
                                    item1.value &&
                                    !item1.title &&
                                    item1.type === 'text-field'
                                  "
                                >
                                  Enter Statement
                                </p>
                                <p
                                  class="ml-6"
                                  v-if="
                                    item1.value &&
                                    !item1.title &&
                                    item1.type === 'label'
                                  "
                                >
                                  Add Label
                                </p>
                                <v-text-field
                                  v-if="
                                    !item1.value && item1.type === 'text-field'
                                  "
                                  dense
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  :color="maincolor.theme"
                                  rounded
                                  v-model="item1.title"
                                  :placeholder="item1.title"
                                  @keyup.enter="item1.value = true"
                                >
                                </v-text-field>
                                <v-text-field
                                  v-if="!item1.value && item1.type === 'label'"
                                  dense
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  :color="maincolor.theme"
                                  rounded
                                  v-model="item1.title"
                                  :placeholder="item1.title"
                                  @keyup.enter="item1.value = true"
                                >
                                </v-text-field>
                                <v-card
                                  elevation="0"
                                  min-width="600"
                                  max-width="680"
                                  color="transparent"
                                  height="10"
                                  v-if="!item1.value && item1.type === 'slider'"
                                  class="mb-n3 mt-n1"
                                >
                                  <v-slider
                                    max="12"
                                    min="3"
                                    :thumb-color="maincolor.theme"
                                    thumb-label="always"
                                    :color="maincolor.theme"
                                    :track-color="maincolor.bar"
                                    v-model="item1.slidervalue"
                                    step="1"
                                  ></v-slider>
                                </v-card>
                              </div>
                              <v-card-actions class="mb-2">
                                <v-spacer></v-spacer>
                                <v-btn
                                  class="mt-n4"
                                  style="
                                    text-transform: none;
                                    font-family: raleway;
                                    font-size: 14px;
                                    font-weight: 700;
                                    color: #474747;
                                  "
                                  text
                                  @click="textfielditemssubmission(item.id)"
                                >
                                  Anlegen
                                </v-btn>
                              </v-card-actions>
                            </div>
                            <div
                              v-if="cardfiledshow === 'Check Boxes'"
                              class="ml-6 mt-6"
                            >
                              <div
                                style="display: flex"
                                v-for="(item3, index) in checkbox_items"
                                :key="index"
                                class="ml-3"
                              >
                                <v-btn
                                  class="mt-n2"
                                  @click="leftside_delete_checkbox(item3)"
                                  icon
                                  v-if="item3.icon === 'mdi-label-outline'"
                                >
                                  <v-icon small>mdi-delete-outline</v-icon>
                                </v-btn>
                                <v-btn
                                  icon
                                  class="mt-n2"
                                  @click="checkboxfunc(item3)"
                                >
                                  <v-icon small>{{ item3.icon }}</v-icon>
                                </v-btn>
                                <p
                                  class="ml-6"
                                  style="cursor: pointer"
                                  v-if="item3.value && item3.title"
                                  @click="checkboxfunc(item3)"
                                >
                                  {{ item3.title }}
                                </p>
                                <p
                                  class="ml-6"
                                  v-if="
                                    item3.value &&
                                    !item3.title &&
                                    item3.type === 'text-field'
                                  "
                                >
                                  Enter Statement
                                </p>
                                <p
                                  class="ml-2"
                                  v-if="
                                    item3.value &&
                                    !item3.title &&
                                    item3.type === 'label'
                                  "
                                >
                                  Add Label
                                </p>
                                <p
                                  class="ml-6"
                                  v-if="
                                    item3.value &&
                                    !item3.title &&
                                    item3.type === 'right-side-text'
                                  "
                                >
                                  Add Right Side Text
                                </p>

                                <v-text-field
                                  v-if="
                                    !item3.value && item3.type === 'text-field'
                                  "
                                  dense
                                  :color="maincolor.theme"
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  rounded
                                  v-model="item3.title"
                                  :placeholder="item3.title"
                                  @keyup.enter="item3.value = true"
                                >
                                </v-text-field>
                                <v-text-field
                                  v-if="
                                    !item3.value &&
                                    item3.type === 'right-side-text'
                                  "
                                  dense
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  rounded
                                  :color="maincolor.theme"
                                  v-model="item3.title"
                                  :placeholder="item3.title"
                                  @keyup.enter="item3.value = true"
                                >
                                </v-text-field>
                                <v-text-field
                                  v-if="!item3.value && item3.type === 'label'"
                                  dense
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  :color="maincolor.theme"
                                  rounded
                                  v-model="item3.title"
                                  :placeholder="item3.title"
                                  @keyup.enter="item3.value = true"
                                >
                                </v-text-field>
                              </div>
                              <v-card-actions class="mb-2">
                                <v-spacer></v-spacer>
                                <v-btn
                                  class="mt-n4"
                                  style="
                                    text-transform: none;
                                    font-family: raleway;
                                    font-size: 14px;
                                    font-weight: 700;
                                    color: #474747;
                                  "
                                  text
                                  @click="checkboxitemssubmission(item.id)"
                                >
                                  Anlegen
                                </v-btn>
                              </v-card-actions>
                            </div>
                            <div
                              v-if="cardfiledshow === 'Drop Down'"
                              class="ml-6 mt-6"
                            >
                              <div
                                style="display: flex"
                                v-for="(item4, index) in drop_down_items"
                                :key="index"
                                class="ml-3"
                              >
                                <v-btn
                                  class="mt-n2"
                                  @click="leftside_delete_dropdown(item4)"
                                  icon
                                  v-if="
                                    item4.icon ===
                                    'mdi-arrow-down-drop-circle-outline'
                                  "
                                >
                                  <v-icon small>mdi-delete-outline</v-icon>
                                </v-btn>
                                <v-btn
                                  icon
                                  class="mt-n2"
                                  @click="dropdownfunc(item4)"
                                >
                                  <v-icon small>{{ item4.icon }}</v-icon>
                                </v-btn>
                                <p
                                  class="ml-6"
                                  style="cursor: pointer"
                                  v-if="item4.value && item4.title"
                                  @click="dropdownfunc(item4)"
                                >
                                  {{ item4.title }}
                                </p>
                                <p
                                  class="ml-6"
                                  v-if="
                                    item4.value &&
                                    !item4.title &&
                                    item4.type === 'text-field'
                                  "
                                >
                                  Enter Statement
                                </p>
                                <p
                                  class="ml-2"
                                  v-if="
                                    item4.value &&
                                    !item4.title &&
                                    item4.type === 'drop-down-option'
                                  "
                                >
                                  Add Drop Down Option
                                </p>

                                <v-text-field
                                  v-if="
                                    !item4.value && item4.type === 'text-field'
                                  "
                                  dense
                                  :color="maincolor.theme"
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  rounded
                                  v-model="item4.title"
                                  :placeholder="item4.title"
                                  @keyup.enter="item4.value = true"
                                >
                                </v-text-field>
                                <v-text-field
                                  v-if="
                                    !item4.value &&
                                    item4.type === 'drop-down-option'
                                  "
                                  :color="maincolor.theme"
                                  dense
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  rounded
                                  v-model="item4.title"
                                  :placeholder="item4.title"
                                  @keyup.enter="item4.value = true"
                                >
                                </v-text-field>
                              </div>
                              <v-card-actions class="mb-2">
                                <v-spacer></v-spacer>
                                <v-btn
                                  class="mt-n4"
                                  style="
                                    text-transform: none;
                                    font-family: raleway;
                                    font-size: 14px;
                                    font-weight: 700;
                                    color: #474747;
                                  "
                                  text
                                  @click="
                                    dropdownoptionitemssubmission(item.id)
                                  "
                                >
                                  Anlegen
                                </v-btn>
                              </v-card-actions>
                            </div>
                            <div
                              v-if="cardfiledshow === 'Radio Button'"
                              class="ml-6 mt-6"
                            >
                              <div
                                style="display: flex"
                                v-for="(item5, index) in radio_button_items"
                                :key="index"
                                class="ml-3"
                              >
                                <v-btn
                                  class="mt-n2"
                                  @click="leftside_delete_radiobtn(item5)"
                                  icon
                                  v-if="item5.icon === 'mdi-label-outline'"
                                >
                                  <v-icon small>mdi-delete-outline</v-icon>
                                </v-btn>
                                <v-btn
                                  icon
                                  class="mt-n2"
                                  @click="radiobuttonfunc(item5)"
                                >
                                  <v-icon small>{{ item5.icon }}</v-icon>
                                </v-btn>
                                <p
                                  class="ml-6"
                                  style="cursor: pointer"
                                  v-if="item5.value && item5.title"
                                  @click="radiobuttonfunc(item5)"
                                >
                                  {{ item5.title }}
                                </p>
                                <p
                                  class="ml-6"
                                  v-if="
                                    item5.value &&
                                    !item5.title &&
                                    item5.type === 'text-field'
                                  "
                                >
                                  Enter Statement
                                </p>
                                <p
                                  class="ml-2"
                                  v-if="
                                    item5.value &&
                                    !item5.title &&
                                    item5.type === 'label'
                                  "
                                >
                                  Add Label
                                </p>
                                <p
                                  class="ml-6"
                                  v-if="
                                    item5.value &&
                                    !item5.title &&
                                    item5.type === 'right-side-text'
                                  "
                                >
                                  Add Radio text on Right Side
                                </p>

                                <v-text-field
                                  v-if="
                                    !item5.value && item5.type === 'text-field'
                                  "
                                  dense
                                  :color="maincolor.theme"
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  rounded
                                  v-model="item5.title"
                                  :placeholder="item5.title"
                                  @keyup.enter="item5.value = true"
                                >
                                </v-text-field>
                                <v-text-field
                                  v-if="
                                    !item5.value &&
                                    item5.type === 'right-side-text'
                                  "
                                  dense
                                  :color="maincolor.theme"
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  rounded
                                  v-model="item5.title"
                                  :placeholder="item5.title"
                                  @keyup.enter="item5.value = true"
                                >
                                </v-text-field>
                                <v-text-field
                                  v-if="!item5.value && item5.type === 'label'"
                                  dense
                                  class="mt-n2 mr-4 mb-n3"
                                  outlined
                                  :color="maincolor.theme"
                                  rounded
                                  v-model="item5.title"
                                  :placeholder="item5.title"
                                  @keyup.enter="item5.value = true"
                                >
                                </v-text-field>
                              </div>
                              <v-card-actions class="mb-2">
                                <v-spacer></v-spacer>
                                <v-btn
                                  class="mt-n4"
                                  style="
                                    text-transform: none;
                                    font-family: raleway;
                                    font-size: 14px;
                                    font-weight: 700;
                                    color: #474747;
                                  "
                                  text
                                  @click="radiobuttonitemssubmission(item.id)"
                                >
                                  Anlegen
                                </v-btn>
                              </v-card-actions>
                            </div>
                          </div>
                          <v-row justify="center" v-if="!item.signaturecard">
                            <v-tooltip left>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  icon
                                  @click="adddata = !adddata"
                                  v-on="on"
                                  v-bind="attrs"
                                >
                                  <v-icon>mdi-card-text-outline</v-icon></v-btn
                                >
                              </template>
                              <span class="ml-2 mr-2">Add Content</span>
                            </v-tooltip>

                            <v-tooltip right>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  v-on="on"
                                  v-bind="attrs"
                                  icon
                                  @click="left_right_side_data_enter(item)"
                                >
                                  <v-icon>mdi-transfer-right</v-icon>
                                </v-btn>
                              </template>
                              <span class="ml-2 mr-2"
                                >Add right-side information with-respect-to
                                left-side</span
                              >
                            </v-tooltip>
                          </v-row>
                           <v-card
                v-if="rightsidedata"
            
                elevation="0"
                outlined
               
                
              >
                <p class="ml-5 mt-2" style="font-weight: 560">
                  Select Statements for Adding Content in Right Side 
                </p>
                <v-select
                  v-model="rightside_statement_model"
                  :items="leftside_eachpannal_all_statement"
                  item-text="statement"
                  item-value="id"
                  :item-color="maincolor.theme"
                  return-object
                  dense
                  multiple
                  outlined
                  class="pl-5 pr-5 mt-n1"
                  :menu-props="{
                    bottom: true,
                    offsetY: true,
                  }"
                  :color="maincolor.theme"
                >
                </v-select>
                <div v-if="rightside_statement_model.length > 0">
                  <p class="ml-5 mt-n1" style="font-weight: 560">
                    Right Side Display will show when following fields are filled
                  </p>
                  <v-select
                    v-model="rightside_triger_statement_model"
                    :items="leftside_triger_eachpannal_all_inner_statement"
                    item-text="mixture"
                    item-value="id"
                    :item-color="maincolor.theme"
                    return-object
                    dense
                    multiple
                    outlined
                    class="pl-5 pr-5"
                    :menu-props="{
                      bottom: true,
                      offsetY: true,
                    }"
                    :color="maincolor.theme"
                  >
                  </v-select>
                </div>
                <div v-if="rightside_statement_model.length > 0">
                  <p class="ml-5 mt-n1" style="font-weight: 560">
                    Right Side Display will contain values from following fields 
                  </p>
                  <v-select
                    v-model="rightside_inner_statement_model"
                    :items="leftside_eachpannal_all_inner_statement"
                    item-text="mixture"
                    item-value="id"
                    return-object
                    dense
                    multiple
                    :item-color="maincolor.theme"
                    outlined
                    class="pl-5 pr-5"
                    :menu-props="{
                      bottom: true,
                      offsetY: true,
                    }"
                    :color="maincolor.theme"
                  >
                  </v-select>
                </div>
                <v-list
                  class="pl-6 mt-n2 mb-n1"
                  v-if="rightside_statement_model.length > 0"
                >
                  <v-list-item>
                    <p style="font-weight: 560">
                    Right Side Display 
                    </p>
                  </v-list-item>
                </v-list>
                <div
                  v-if="rightside_statement_model.length > 0"
                  style="display: flex"
                  class="pl-4 pr-4"
                >
                  <v-textarea
                    outlined
                    :color="maincolor.theme"
                    auto-grow
                    v-model="right_side_import_data_model"
                    rows="1"
                    dense
                    class="ml-2 mr-1"
                  ></v-textarea>
                  <v-btn @click="right_side_option = !right_side_option" icon>
                    <v-icon> mdi-help </v-icon>
                  </v-btn>
                  <v-btn @click="right_side_data_import_func()" icon>
                    <v-icon> mdi-import </v-icon>
                  </v-btn>
                </div>
                <v-card
                  min-width="300"
                  min-height="300"
                  style="position: absolute; right: 13.5%; top: 55%; z-index: 3"
                  v-if="right_side_import_data"
                  class="pt-3 pl-3 pr-3"
                >
                  <v-row
                    justify="center"
                    class="mb-n2"
                    v-for="(item, index) in data_import_pdf_png_content"
                    :key="index"
                  >
                    <v-btn
                      icon
                      class="mt-n2"
                      @click="copy_import_data_func(item)"
                    >
                      <v-icon small> mdi-content-copy </v-icon>
                    </v-btn>
                    <p style="text-align: center">{{ item }}</p>
                  </v-row>
                </v-card>
                <v-card
                  width="300"
                  min-height="400"
                  style="position: absolute; right: 13.5%; top: 57%; z-index: 4"
                  v-if="right_side_option"
                >
                  <v-list>
                    <v-list-item>
                      <p>
                        "Vertragspartner des Kunden für die über den Amazon Shop
                        [[0]] abgeschlossenen Verträge"
                      </p>
                    </v-list-item>
                  </v-list>
                </v-card>
                <div
                  v-if="rightside_statement_model.length > 0"
                  class="ml-6 mt-n1"
                >
                  <p style="font-weight: 560">Right Side Display is a Section Heading?</p>
                  <v-radio-group v-model="right_side_section_heading_model" row>
                    <v-radio
                      :color="maincolor.theme"
                      v-for="(n, index) in right_sdie_section_heading"
                      :key="index"
                      :label="n.label"
                      :value="n.value"
                    ></v-radio>
                  </v-radio-group>
                </div>
                <div
                  v-if="
                    rightside_statement_model.length > 0 &&
                    right_side_section_heading_model === 'Nein'
                  "
                  class="ml-6 mt-n1"
                >
                  <p style="font-weight: 560">Right Side Display is a Numbered List?</p>
                  <v-radio-group v-model="right_side_inner_heading_model" row>
                    <v-radio
                      :color="maincolor.theme"
                      v-for="(n, index) in right_side_inner_heading"
                      :key="index"
                      :label="n.label"
                      :value="n.value"
                    ></v-radio>
                  </v-radio-group>
                </div>
                <div
                  v-if="rightside_statement_model.length > 0"
                  class="ml-6 mt-n1"
                >
                  <p style="font-weight: 560">Line Breaks</p>
                  <v-radio-group v-model="right_side_line_break_model" row>
                    <v-radio
                      :color="maincolor.theme"
                      v-for="(n, index) in right_sdie_line_break"
                      :key="index"
                      :label="n.label"
                      :value="n.value"
                    ></v-radio>
                  </v-radio-group>
                </div>
                <v-row
                  v-if="rightside_statement_model.length > 0"
                  justify="end"
                  class="mr-2 mt-n3 mb-3"
                >
                  <v-btn text @click="right_side_data_submit()">submit</v-btn>
                </v-row>
              </v-card>
                        </v-expansion-panel-content>
                         <div v-if="item.signaturecard">
                                   <v-card elevation="0"
                                   max-width="700"
                          v-if="item.isactive && !item.signature"
                          class="mt-n5 mb-7 ml-7"
                        >
                        <div style="display:flex">
                          <div style="width:32em">
                       <v-text-field
                       outlined
                       label="Name"
                       dense
                       rounded
                       placeholder="Name"
                       
                       :color="maincolor.theme"
                       v-model="item.signaturename"
                       >
                       </v-text-field>
                    </div>
                        <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        bottom
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="item.signaturedate"
            placeholder="Datum auswählen"
            prepend-icon="mdi-calendar"
            v-bind="attrs"
            :color="maincolor.theme"
            class="ml-5 mt-2"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="item.signaturedate"
            :color="maincolor.theme"
          @input="menu = false"
        ></v-date-picker>
      </v-menu>
                        </div>
            <p style="font-weight:600">Wähle die Position für die Platzierung</p>
            <v-radio-group row v-model="item.signatureposition">
      <v-radio
        v-for="(n,index) in item.positionitem"
        :key="index"
        :label="n.label"
        :value="n.value"
           :color="maincolor.theme"
      ></v-radio>
    </v-radio-group>
    <v-row justify="left">
<VueSignaturePad
                            class=""
                            style="background-color: #ececec"
                            width="200px"
                            height="100px"
                            ref="signaturePad"
                          />
                         
    </v-row>
    <v-row justify="left">
       <v-btn text @click="save_signature()">Speichern </v-btn>
                          <v-btn text @click="undo_signature()">Rückgängig</v-btn>
    </v-row>
                          
                        </v-card>
                        <v-card
                          v-if="item.isactive && item.signature"
                       elevation="0"
                                   max-width="700"
                          class="mt-n5 mb-5 ml-7"
                        >

                        <div style="display:flex;">
                        <p style="font-weight:600">Name : </p>
                        <p class="ml-4" v-if="item.signaturename">{{item.signaturename}}</p>
                        <p class="ml-4" v-if="!item.signaturename">-</p>
                        </div>
                        <div style="display:flex;">
                        <p style="font-weight:600">Datum : </p>
                        <p class="ml-4" v-if="item.signaturedate">{{item.signaturedate}}</p>
                        <p class="ml-4" v-if="!item.signaturedate">-</p>
                        </div>
                        <v-row>
                          <p style="font-weight:600">Unterschrift : </p>
                            <img
                            width="200px"
                            height="100px"
                            class="mt-n9"
                            style="margin-left:5vw"
                            :src="item.signaturedata"
                          />
                        </v-row>
                          
                        </v-card>

                         <v-row justify="left" class="mt-n5 mb-6 ml-4">
                          <v-btn class="" text v-if="item.isactive && item.signature" @click="reset_signature()">Zurücksetzen</v-btn>
                        </v-row>
                                 </div>
                        <div
                          style="position:absolute;left:44%;display:flex;" class=""
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
                                  class="mt-1"
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
                                            :color="maincolor.theme"
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
                                            :color="maincolor.theme"
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
                              class="mt-1"
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
                              class="mt-1"
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
            </v-card>
          </div>

          <!-- card2 -->

         <div
            style="width: 55%; background-color: #ffffff; position: relative"
            id="printme"
          >
         <!-- <v-card  style="background-color: #aaaaaf; min-height: 5vh" elevation="3"><div>FOR TABS</div> </v-card> -->
            <v-card
              elevation="0"
              style="background-color: #ffffff; min-height: 120vh"
            >
  
            <v-card elevation="0">
      <v-toolbar
        color="white"
        elevation="0"
       
      >
        <v-spacer></v-spacer>
       <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
       <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      
      
  
        <!-- <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
  
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template> -->
      </v-toolbar>
  
      <!-- <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items> -->
    </v-card>
  
       
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
                                      <v-card class="mb-3" elevation="0" >
                                        <div class="editor ml-3" >
                                    <editor-menu-bar
                                    justify="center"
                                            style="background-color: #ffffff"
                                            v-slot="{ commands, isActive }"
                                            :editor="editor2"
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
                                                  v-if="
                                                    actionName === 'paragraph'
                                                  "
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
                                           
                                               
      
      
        <v-menu 
         v-if="actionName === 'table'"
        offset-y>
            <template v-slot:activator="{ on }">
         
            <v-btn
             class="menubar__button"
           :class="{
      'is-active':
      isActive.table(),
   }"
              icon
              v-on="on"
            >
             
         <v-icon>mdi-file-table-box-outline</v-icon>
          
     
           
            
            
               </v-btn>
            
          </template>
        <v-card
          elevation="0"
          class="ma-0 pa-0"
          width="200"
          min-height="200"
          max-height="500"
          style="border-radius: 15px 15px 15px 15px"
        >
         
            
             
              <v-divider></v-divider>
              <v-list
               
              >
              <v-list-item >
                                                 <v-btn
                                                 
                                                 elevation="0"
                                                  color="#ffffff"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.table(),
                                                  }"
                                                  @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: true })"
                                                ><span class="mceIcon mce_row_props"></span>
                                                 Insert Table
                                                </v-btn>
                </v-list-item>
              <div v-if="isActive.table()">
                <v-list-item >
                                                <v-btn
                                                 
                                                 elevation="0"
                                                  color="#ffffff"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.table(),
                                                  }"
                                                 
                                                    @click="commands.deleteTable" 
                                                                                                  >
                                                  Delete Table
                                                </v-btn>     
                </v-list-item>
                <v-list-item>
                                             <v-btn
                                                 
                                                 elevation="0"
                                                  color="#ffffff"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.table(),
                                                  }"
                                                 
                                                   @click="commands.addRowBefore"
                                                                                                  >
                                                  Add Row Before
                                                </v-btn>     
                </v-list-item>
                <v-list-item>
                                                  <v-btn
                                                 
                                                 elevation="0"
                                                  color="#ffffff"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.table(),
                                                  }"
                                                 
                                                   @click="commands.addRowAfter"
                                                                                                  >
                                                  Add Row After
                                                </v-btn>
                </v-list-item>
                <v-list-item>
                                                 <v-btn
                                                 
                                                 elevation="0"
                                                  color="#ffffff"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.table(),
                                                  }"
                                                 
                                                   @click="commands.deleteRow"
                                                                                                  >
                                                  Delete Row
                                                </v-btn>
                </v-list-item>
                <v-list-item>
                                             <v-btn
                                                 
                                                 elevation="0"
                                                  color="#ffffff"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.table(),
                                                  }"
                                                 
                                                   @click="commands.addColumnBefore"
                                                                                                  >
                                                  Add Column Before
                                                </v-btn>     
                </v-list-item>
                <v-list-item>
                                                  <v-btn
                                                 
                                                 elevation="0"
                                                  color="#ffffff"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.table(),
                                                  }"
                                                 
                                                   @click="commands.addColumnAfter"
                                                                                                  >
                                                  Add Column After
                                                </v-btn>
                </v-list-item>
                <v-list-item>
                                                 <v-btn
                                                 
                                                 elevation="0"
                                                  color="#ffffff"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.table(),
                                                  }"
                                                 
                                                   @click="commands.deleteColumn"
                                                                                                  >
                                                  Delete Column
                                                </v-btn>
                </v-list-item>
              </div>
              </v-list>
           
          </v-card>
        </v-menu>
        <v-menu 
         v-if="actionName === 'heading'"
        offset-y>
            <template v-slot:activator="{ on }">
         
            <v-btn
             class="menubar__button"
          :class="{
           'is-active':
              isActive.heading(),
      }"
              icon
              v-on="on"
            >
             
         <v-icon>{{iconH}}</v-icon>
          
     
           
            
            
               </v-btn>
            
          </template>
        <v-card
          elevation="0"
          class="ma-0 pa-0"
          width="150"
          min-height="200"
          max-height="500"
          style="border-radius: 15px 15px 15px 15px"
        >
         
            
             
              <v-divider></v-divider>
              <v-list
               
              >
                <v-list-item >
                                                <v-btn
                                                 
                                                 elevation="0"
                                                  color="#ffffff"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.heading({
                                                        level: 1,
                                                      }),
                                                  }"
                                                  @click="
                                                    commands.heading({
                                                      level: 1,
                                                    }); changeicon('mdi-format-header-1');
                                                  "
                                                >
                                                  <v-icon color="#757575">mdi-format-header-1</v-icon><v-spacer></v-spacer><span style="color:#757575">   Heading 1</span>
                                                </v-btn>     
                </v-list-item>
                <v-list-item>
                                              <v-btn
                                                  elevation="0"
                                                  color="#ffffff"
                                                  
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.heading({
                                                        level: 2,
                                                      }),
                                                  }"
                                                  @click="
                                                    commands.heading({
                                                      level: 2,
                                                    });changeicon('mdi-format-header-2')
                                                  "
                                                >
                                                  <v-icon color="#757575">mdi-format-header-2</v-icon><v-spacer></v-spacer><span style="color:#757575">   Heading 2</span>
                                                </v-btn>     
                </v-list-item>
                <v-list-item>
                                                 <v-btn
                                                 elevation="0"
                                                  color="#ffffff"
                                                  
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.heading({
                                                        level: 3,
                                                      }),
                                                  }"
                                                  @click="
                                                    commands.heading({
                                                      level: 3,
                                                    });changeicon('mdi-format-header-3')
                                                  "
                                                >
                                                   <v-icon color="#757575">mdi-format-header-3</v-icon><v-spacer></v-spacer><span style="color:#757575">   Heading 3</span>
                                                </v-btn>     
                </v-list-item>
                <v-list-item>
                                                 <v-btn
                                                  elevation="0"
                                                  color="#ffffff"
                                                  
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.heading({
                                                        level: 4,
                                                      }),
                                                  }"
                                                  @click="
                                                    commands.heading({
                                                      level: 4,
                                                    });changeicon('mdi-format-header-4')
                                                  "
                                                >
                                                  <v-icon color="#757575">mdi-format-header-4</v-icon><v-spacer></v-spacer><span style="color:#757575">   Heading 4</span>
                                                </v-btn>     
                </v-list-item>
              </v-list>
           
          </v-card>
        </v-menu>
   
      
      
         
                                               
                                                <v-btn
                                                  icon
                                                  v-if="
                                                    actionName === 'blockquote'
                                                  "
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
                                                  v-if="
                                                    actionName === 'underline'
                                                  "
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
                                                    'is-active':
                                                      isActive.strike(),
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
                                                    'is-active':
                                                      isActive.italic(),
                                                  }"
                                                  @click="commands.italic"
                                                >
                                                  <v-icon
                                                    >mdi-format-italic</v-icon
                                                  >
                                                </v-btn>
                                                <v-btn
                                                  icon
                                                  v-if="actionName === 'bold'"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.bold(),
                                                  }"
                                                  @click="commands.bold"
                                                >
                                                  <v-icon
                                                    >mdi-format-bold</v-icon
                                                  >
                                                </v-btn>

                                                <v-btn
                                                  icon
                                                  v-if="actionName === 'code'"
                                                  class="menubar__button"
                                                  :class="{
                                                    'is-active':
                                                      isActive.code(),
                                                  }"
                                                  @click="commands.code"
                                                >
                                                  <v-icon>mdi-code-tags</v-icon>
                                                </v-btn>

                                                <v-btn
                                                  icon
                                                  v-if="
                                                    actionName ===
                                                    'horizontal_rule'
                                                  "
                                                  class="menubar__button"
                                                  @click="
                                                    commands.horizontal_rule
                                                  "
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
                                                    actionName ===
                                                    'ordered_list'
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
                                                  v-if="
                                                    actionName === 'list_check'
                                                  "
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
                                                 <v-tooltip left>
                                            <template
                                              v-slot:activator="{ on, attrs }"
                                            >
                                              <v-btn
                                               v-if="
                                                    actionName ===
                                                    'right_side_edit_content'
                                                  "
                                                icon
                                                class=""
                                                v-on="on"
                                                v-bind="attrs"
                                                @click="
                                                  right_side_edit_content(
                                                    document.rightSide.card.id,
                                                    thisitem
                                                  )
                                                "
                                              >
                                                <v-icon
                                                  >mdi-content-save-edit-outline</v-icon
                                                >
                                              </v-btn>
                                            </template>
                                            <span class="ml-2 mr-2"
                                              >Edit Content</span
                                            >
                                          </v-tooltip>
                                          <v-tooltip right>
                                            <template
                                              v-slot:activator="{ on, attrs }"
                                            >
                                              <v-btn
                                                icon
                                                 v-if="
                                                    actionName ===
                                                    'right_side_delete_content'
                                                  "
                                                class=""
                                                v-on="on"
                                                v-bind="attrs"
                                                @click="
                                                  right_side_delete_content(
                                                     document.rightSide.card.id,
                                                    thisitem
                                                  )
                                                "
                                              >
                                                <v-icon
                                                  >mdi-delete-outline</v-icon
                                                >
                                              </v-btn>
                                            </template>
                                            <span class="ml-2 mr-2"
                                              >Delete Content</span
                                            >
                                          </v-tooltip>
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
                                            class="editor__content"
                                            :editor="editor2"
                                          />
                                        </div>
                                      
                   
                 </v-card>   </div>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
             
              
            </v-card>
            <v-snackbar v-model="snackbar" :timeout="timeout">
              <v-row justify="center"> right side data has been added </v-row>
            </v-snackbar>
          </div>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
 const path = require("path");
const { dialog } = require("electron").remote;
import { Editor, EditorMenuBar,EditorContent } from "tiptap";
// import { EditorContent} from '@tiptap/vue-2';
import { remote } from "electron";
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
  Table,
	TableHeader,
	TableCell,
	TableRow,
  Strike,
  Underline,
  History,
} from "tiptap-extensions";
export default {
  name: "newcontractcreate",
  components: {
    draggable,
    // TiptapVuetify,
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
              "heading",
              "table",
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
              // "list_check",
              // "signature_freehand",
              "right_side_edit_content",
              "right_side_delete_content",
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
        "heading",
        "table",
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
        // "list_check",
        // "signature_freehand",
        "right_side_edit_content",
        "right_side_delete_content",
      ],
    },
  },
  data: () => ({
    editor2 : new Editor({
    
          extensions: [
            new Blockquote(),
            new BulletList(),
            new CodeBlock(),
            new HardBreak(),
            new Heading({ levels: [1, 2, 3, 4] }),
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
            new Table({
                              resizable: true,
                          }),
                          new TableHeader(),
                          new TableCell(),
                          new TableRow(),
          ],
          
          onUpdate() {
            
            const json = this.getJSON()
            const html = this.getHTML()
           console.log(html)
            console.log(json)



  },

      
      
      }),
    contentforedit:null,
     thisitem:null,
  iconH:"mdi-format-header-1",
    menu:false,
    right_side_edit_content_card: false,
    snackbar: false,
    timeout: 2000,
    right_side_edit_inner_heading: [
      { label: "Ja", value: "Ja" },
      { label: "Nein", value: "Nein" },
    ],
    right_side_inner_heading: [
      { label: "Ja", value: "Ja" },
      { label: "Nein", value: "Nein" },
    ],
    rightside_edit_inner_statement_model_decrement_or_increment: "",
    right_side_inner_heading_model: "",
    right_side_line_break_model: "",
    right_side_section_heading_model: "",
    right_side_edit_inner_heading_model: "",
    right_side_edit_line_break_model: "",
    right_side_edit_section_heading_model: "",
    right_sdie_edit_section_heading: [
      { label: "Ja", value: "Ja" },
      { label: "Nein", value: "Nein" },
    ],
    right_sdie_section_heading: [
      { label: "Ja", value: "Ja" },
      { label: "Nein", value: "Nein" },
    ],
    right_sdie_line_break: [
      { label: "0", value: 0 },
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 },
    ],
    right_sdie_edit_line_break: [
      { label: "0", value: 0 },
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 },
    ],
    import_pdf_png_data_model: [],
    right_side_import_data_model: [],
    right_side_edit_import_data_model: "",
    rightside_statement_model: [],
    data_import_pdf_png_content: [],
    right_side_import_data: false,
    right_side_edit_import_data: false,
    right_side_option: false,
    right_side_edit_option: false,
    rightside_statement_type: "",
    rightside_triger_statement_model: [],
    rightside_inner_statement_model: [],
    leftside_eachpannal_all_inner_statement: [],
    leftside_triger_eachpannal_all_inner_statement: [],
    leftside_eachpannal_all_statement: [],

    rightside_edit_statement_model: [],
    rightside_edit_triger_statement_model: [],
    rightside_edit_inner_statement_model: [],
    leftside_edit_eachpannal_all_inner_statement: [],
    leftside_edit_triger_eachpannal_all_inner_statement: [],
    leftside_edit_eachpannal_all_statement: [],
    rightsidedata: false,
    adddata: false,
    right_side_statement_number: "",
    radio_button_items: [
      {
        id: 1,
        title: "",
        icon: "mdi-text-short",
        value: true,
        type: "text-field",
      },
      {
        id: 2,
        title: "",
        icon: "mdi-label-outline",
        value: true,
        type: "label",
      },
      {
        id: 3,
        title: "",
        icon: "mdi-tag-text-outline",
        value: true,
        type: "right-side-text",
      },
      {
        id: 4,
        title: "Add Another Radio Field",
        icon: "mdi-shape-square-rounded-plus",
        value: true,
      },
    ],
    radio_button_items1: [],
    drop_down_items: [
      {
        id: 1,
        title: "",
        icon: "mdi-text-short",
        value: true,
        type: "text-field",
      },
      {
        id: 2,
        title: "",
        icon: "mdi-arrow-down-drop-circle-outline",
        value: true,
        type: "drop-down-option",
      },
      {
        id: 3,
        title: "Add Another drop-down-option",
        icon: "mdi-form-dropdown",
        value: true,
      },
    ],
    drop_down_items1: [],
    checkbox_items: [
      {
        id: 1,
        title: "",
        icon: "mdi-text-short",
        value: true,
        type: "text-field",
      },
      {
        id: 2,
        title: "",
        icon: "mdi-label-outline",
        value: true,
        type: "label",
      },
      {
        id: 3,
        title: "",
        icon: "mdi-tag-text-outline",
        value: true,
        type: "right-side-text",
      },
      {
        id: 4,
        title: "Add Another Checkbox",
        icon: "mdi-checkbox-marked-outline",
        value: true,
      },
    ],
    checkbox_items1: [],
    Text_filed_items: [
      {
        id: 1,
        title: "",
        icon: "mdi-text-short",
        value: true,
        type: "text-field",
      },
      {
        id: 2,
        title: "",
        icon: "mdi-label-outline",
        value: true,
        type: "label",
      },
      {
        id: 3,
        title: "Add Size of Text Filed",
        icon: "mdi-arrow-left-right-bold-outline",
        value: true,
        type: "slider",
        slidervalue: "6",
      },
      {
        id: 4,
        title: "Add more than one text-filed for one statement",
        icon: "mdi-shape-square-rounded-plus",
        value: true,
      },
    ],
    Text_filed_items1: [],
    editfielditems: [
      { title: "Text Field", icon: "mdi-text-short" },
      { title: "Radio Button", icon: "mdi-radiobox-marked" },
      { title: "Check Boxes", icon: "mdi-checkbox-marked-outline" },
      { title: "Drop Down", icon: "mdi-arrow-down-drop-circle-outline" },
    ],
    cardfiledsitems: [
      { title: "Text Field", icon: "mdi-text-short" },
      { title: "Radio Button", icon: "mdi-radiobox-marked" },
      { title: "Check Boxes", icon: "mdi-checkbox-marked-outline" },
      { title: "Drop Down", icon: "mdi-arrow-down-drop-circle-outline" },
    ],
    cardfiledshow: "Text Field",
    editfieldshow: "",
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
    semiedit: true,
    local_document_value: [],
    local_document_count: 0,
    contract_title: "Contract Vertrag",
    edit: true,
    document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:3,
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
                      editcontent: false,
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
                      editcontent: false,
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
                          statement:
                            "Wer soll Vertragspartner des Kunden werden?",
                          type: "dropselect",
                          length: 2,
                          value: "",
                          choices: ["keine Angabe", "Frau", "Herr"],
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      editcontent: false,
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
                          size: "col-2",
                        },
                        {
                          eid: "s3-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s3-ms7",
                          line: "Email",
                          value: "",
                          size: "col-5",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:8,
                  section: [
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
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
                      editcontent: false,
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
                      editcontent: false,
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
                      editcontent: false,
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
                      editcontent: false,
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
                          statement:
                            "Wie lange wird der Vertragstext gespeichert?",
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
                      editcontent: false,
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
                      editcontent: false,
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
                      editcontent: false,
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
                          line:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
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
                  name: "Bezahlung",
                  name_edit:false,
                  total_fields: 4,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:4,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
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
                      editcontent: false,
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
                          line:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
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
                      editcontent: false,
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
                      editcontent: false,
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
                {
                  id: 4,
                  eye: false,
                  name: "Unterschrift",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                  signaturename:"",
                  signaturedate:null,
                  signatureposition:"center",
                  positionitem:[
      {label:"Links ",value:"start"},
      {label:"Mitte ",value:"center"},
      {label:"Rechts",value:"end"},
    ],
                  type :"signature_card",
                  section_id_length:0,
                  section:[],
                },                
              ],
            },
            rightSide: {
              title: "Allgemeine Geschäftsbedingungen",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  section_inner_value_counter_greater_than_one:false,
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
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
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
                        "s3-ms7",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
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
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
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
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
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
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms5", "s3-ms6","s3-ms7"],
                          display: " [[0]]  [[1]] [[2]] ",
                        },
                      ],
                      values_on_which_depend: ["s3-ms5", "s3-ms6" , "s3-ms7"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  section_inner_value_counter_greater_than_one:false,
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
                        {"s1": "Ja"},
                        {"s1": "Nein"},
                        {"s2": "Ja"},
                        {"s2": "Nein"},
                        {"s3": "Ja"},
                        {"s3": "Nein"},
                        {"s4": "Sprache wählen"},
                        {"s4": "Keine weitere Sprache"},
                        {"s5": "Ja"},
                        {"s5": "Nein"},
                        "s6-ms1",
                        "s7-ms1",
                        {"s8": "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers"},
                        {"s8": "Sonstiges"},
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
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
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                            "Als Vertragssprache stehen deutsch ,[[0]] zur Verfügung.",
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Die Vertragssprache ist Deutsch.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Keine weitere Sprache" }],
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            {
                              "s5-ms3": [
                                ". 2 Jahre",
                                ". 5 Jahre ",
                                ". 10 Jahre ",
                              ],
                            },
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s6-ms1"],
                          display:
                            "Der Kunde erhält den Vertragstext über [[0]]",
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                          s8:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                          s8:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  section_inner_value_counter_greater_than_one:false,
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
                      values_on_which_depend: ["s1-ms1", 
                        {"s2": "Keine Besonderheiten [Angebote gegenüber Verbrauchern]"},
                        {"s2": "Kleinunternehmer iSd § 19 UstG"},
                        {"s3": "Ja"},
                        {"s3": "Nein"},
                        {"s4": "Ja"},
                        {"s4": "Nein"},
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                          s2:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3"],
                          display:
                            "Die Versandkosten betragen [[0]] je Bestellung.",
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
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
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Unterschrift",
                  section_inner_value_counter_greater_than_one:false,
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                  signaturename:"",
                  signaturedate:null,
                  signatureposition:"",
                  section: []
                },
              ],
            },
          },
  }),
  created() {
// this.forContent();
// this.editor2.setContent(this.contentforedit);
    for (var i = 0; i < store.state.contract_card_details.length; i++) {
      this.items.push(store.state.contract_card_details[i].contract_name);
    }
    this.items_search = this.items;
    bus.$on("newcontracttitle", (value) => {
      this.change_contract_title(value);
 });
 console.log("created")

  },
 
  beforeCreate() {
  
    this.$store.commit("settitlenewcontract", true);
    store.commit("seteyecheck", true);
  
   console.log("beforecreate");},
  beforeDestroy() {
    this.setting_properties_to_default()
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
        localStorage.getItem("contracts data")
      );
      if (val == null) {
        val = {};
      }
      var a1v1 = localStorage.getItem("current_contract_title");
      var a2 = localStorage.getItem("current_contract_group_title");

      let b = JSON.stringify(this.document);
      val[ a2 + "-" + a1v1] = b;
      //this.contract_array.push(this.contract)
      localStorage.setItem(
        "contracts data",
        JSON.stringify(val)
      );
      this.writeinfilesystem_inamazon()
      var data = localStorage.getItem("contracts data");
      const encrypteddata = cryptr.encrypt(data);
      const configDir =  (electron.app || electron.remote.app).getPath('userData');
      var k = "CCcontractsdata.json"
      var filepath = path.join(configDir,this.$version,k)
      fs.writeFileSync(filepath , encrypteddata);
    }
   console.log("beforedestroy");},
  
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
 
  console.log("mounted");
  
  
  
  },
  beforeUpdate(){
    this.forContent();
    // console.log(this.contentforedit);
    this.editor2.setContent(this.contentforedit);
  //   const html=this.editor2.getHTML();

  // console.log(html);
   
        // this.editor2.setContent(this.contentforedit);
  console.log("before update");
  },
updated(){
  // this.editor2.commands.setContent(this.contentforedit)
  
  console.log("updated");
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
    // right_side_import_data_model_computed: function (){
    //   // console.log(this.right_side_import_data_model)
    //   //  console.log(this.import_pdf_png_data_model)
    //   // this.right_side_import_data_model = this.import_pdf_png_data_model;
    //   //  console.log(this.right_side_import_data_model)
    // },
    rightside_edit_user_field_input_selection: function () {
      var data_in_watch_org = this.right_side_edit_import_data_model;
      var data_in_watch = this.right_side_edit_import_data_model;
      this.right_side_edit_import_data_model = "";
      var i, str;
      for (i = 0; i < this.rightside_edit_inner_statement_model.length; i++) {
        str = "[[" + i + "]]";
        this.right_side_edit_import_data_model =
          this.right_side_edit_import_data_model + str;
      }
      for (i = 0; i < this.rightside_edit_inner_statement_model.length; i++) {
        let str_split = "[[" + i + "]]";
        data_in_watch = data_in_watch.replace(str_split, "JJJJJ");
      }
      var myArr = data_in_watch.split("JJJJJ");
      this.right_side_edit_import_data_model = "";
      for (i = 0; i < this.rightside_edit_inner_statement_model.length; i++) {
        var trim_array = myArr[i].trim();
        if (myArr[i].length !== 0) {
          this.right_side_edit_import_data_model =
            this.right_side_edit_import_data_model +
            trim_array +
            " [[" +
            i +
            "]] ";
        } else if (myArr[i].length === 0) {
          this.right_side_edit_import_data_model =
            this.right_side_edit_import_data_model + " [[" + i + "]] ";
        }
      }
      if (
        this.rightside_edit_inner_statement_model_decrement_or_increment >
        this.rightside_edit_inner_statement_model.length
      ) {
        var key1 = myArr[i].split("]]").pop();
        var key2 = myArr[i].slice(0, myArr[i].indexOf("[["));
        this.right_side_edit_import_data_model =
          this.right_side_edit_import_data_model + key2 + key1;
        this.rightside_edit_inner_statement_model_decrement_or_increment =
          this.rightside_edit_inner_statement_model.length;
      } else if (
        this.rightside_edit_inner_statement_model_decrement_or_increment <
        this.rightside_edit_inner_statement_model.length
      ) {
        key1 = myArr[i].split("]]").pop();
        this.right_side_edit_import_data_model =
          this.right_side_edit_import_data_model + key1;
        this.rightside_edit_inner_statement_model_decrement_or_increment =
          this.rightside_edit_inner_statement_model.length;
      } else if (
        this.rightside_edit_inner_statement_model_decrement_or_increment ===
        this.rightside_edit_inner_statement_model.length
      ) {
        this.right_side_edit_import_data_model = data_in_watch_org;
        this.rightside_edit_inner_statement_model_decrement_or_increment =
          this.rightside_edit_inner_statement_model.length;
      }
      //
    },
    rightside_user_field_input_selection: function () {
      var data_in_watch = this.right_side_import_data_model;
      this.right_side_import_data_model = "";
      var i, str;
      for (i = 0; i < this.rightside_inner_statement_model.length; i++) {
        str = "[[" + i + "]]";
        this.right_side_import_data_model =
          this.right_side_import_data_model + str;
      }
      for (i = 0; i < this.rightside_inner_statement_model.length; i++) {
        let str_split = "[[" + i + "]]";
        data_in_watch = data_in_watch.replace(str_split, "JJJJJ");
      }
      var myArr = data_in_watch.split("JJJJJ");
      this.right_side_import_data_model = "";
      for (i = 0; i < this.rightside_inner_statement_model.length; i++) {
        var trim_array = myArr[i].trim();
        if (myArr[i].length !== 0) {
          this.right_side_import_data_model =
            this.right_side_import_data_model + trim_array + " [[" + i + "]] ";
        } else if (myArr[i].length === 0) {
          this.right_side_import_data_model =
            this.right_side_import_data_model + " [[" + i + "]] ";
        }
      }
      if (myArr.length > i) {
        var key1 = myArr[i].split("]]").pop();
        var key2 = myArr[i].slice(0, myArr[i].indexOf("[["));
        this.right_side_import_data_model =
          this.right_side_import_data_model + key2 + key1;
      }
    },
    rightside_statement_model_computed: function () {
      if (this.rightside_statement_model.length != 0) {
        var section_ids = this.rightside_statement_model.map(function (el) {
          return el.id;
        });
        var id = this.rightside_statement_model[0].card_id;
        var item = this.document.leftSide.card[id - 1];
        var item_filtered = item.section.filter((item) =>
          section_ids.includes(item.eid)
        );
        var i, j, test_field;
        var array = [];
        var array_2 = [];
        for (i = 0; i < item_filtered.length; i++) {
          if (item_filtered[i].type === "textfield") {
            for (j = 0; j < item_filtered[i].fields.length; j++) {
              test_field = {
                eid: item_filtered[i].fields[j].eid,
                label: item_filtered[i].fields[j].line,
                statement: item_filtered[i].statement,
                mixture:
                  item_filtered[i].statement +
                  " - " +
                  item_filtered[i].fields[j].line,
              };
              array.push(test_field);
              array_2.push(test_field);
            }
          }
          if (item_filtered[i].type === "radio") {
            var test_field_2 = {
              eid: item_filtered[i].eid,
              // eid: item_filtered[i].fields[j].eid,
              label: "radio",
              statement: item_filtered[i].statement,
              mixture: item_filtered[i].statement + " - " + "radio",
            };
            array_2.push(test_field_2);
            for (j = 0; j < item_filtered[i].fields.length; j++) {
              var obj_radio_fields = {};
              obj_radio_fields[item_filtered[i].eid] =
                item_filtered[i].fields[j].value;

              test_field = {
                eid: obj_radio_fields,
                // eid: item_filtered[i].fields[j].eid,
                label: item_filtered[i].fields[j].line,
                statement: item_filtered[i].statement,
                mixture:
                  item_filtered[i].statement +
                  " - " +
                  item_filtered[i].fields[j].line,
              };
              array.push(test_field);
            }
          }
          if (item_filtered[i].type === "checkbox") {
            test_field = {
              eid: item_filtered[i].eid,
              label: "checkbox",
              statement: item_filtered[i].statement,
              mixture: item_filtered[i].statement + " - " + "checkbox",
            };
            array.push(test_field);
            array_2.push(test_field);
          }
          if (item_filtered[i].type === "dropselect") {
            test_field = {
              eid: item_filtered[i].eid,
              label: "dropselect",
              statement: item_filtered[i].statement,
              mixture: item_filtered[i].statement + " - " + "dropselect",
            };
            array.push(test_field);
            array_2.push(test_field);
          }
        }
        this.leftside_triger_eachpannal_all_inner_statement = array;
        this.leftside_eachpannal_all_inner_statement = array_2;
        //
      
        // functionality pehli field ko jb unselect krty hain to second model ma value khtm krny k liye
        var local_array3 = [],permittedValues,permittedValues_string = [],permittedValues_object = [],k,key;
        permittedValues = this.leftside_triger_eachpannal_all_inner_statement.map(value => value.eid);
        for(i=0; i< permittedValues.length ; i++){
          if(typeof(permittedValues[i]) === 'string'){ permittedValues_string.push(permittedValues[i]) }
          if(typeof(permittedValues[i]) === 'object'){
          key = Object.keys(permittedValues[i]) 
           permittedValues_object.push(key[0]) 
          }
        }
       permittedValues_object = [...new Set(permittedValues_object)];
        for(i=0 ; i< this.rightside_triger_statement_model.length ; i++){
          if(typeof(this.rightside_triger_statement_model[i].eid) === 'string' ){
            k = permittedValues_string.find(o=> o === this.rightside_triger_statement_model[i].eid)
            if(k !== undefined)  local_array3.push(this.rightside_triger_statement_model[i])
          }
          if(typeof(this.rightside_triger_statement_model[i].eid) === 'object' ){
            key = Object.keys(this.rightside_triger_statement_model[i].eid);
            k = permittedValues_object.find(o => o === key[0])
            if(k !== undefined)  local_array3.push(this.rightside_triger_statement_model[i])
          }
        }
        this.rightside_triger_statement_model  = local_array3
        
        //// functionality pehli field ko jb unselect krty hain to third model ma value khtm krny k liye
        local_array3 = []
        permittedValues = []
        permittedValues_string = []
        permittedValues_object = []
        permittedValues = this.leftside_eachpannal_all_inner_statement.map(value => value.eid);
        for(i=0; i< permittedValues.length ; i++){
          if(typeof(permittedValues[i]) === 'string'){ permittedValues_string.push(permittedValues[i]) }
          if(typeof(permittedValues[i]) === 'object'){
           key = Object.keys(permittedValues[i]) 
           permittedValues_object.push(key[0]) 
          }
        }
        permittedValues_object = [...new Set(permittedValues_object)];
        for(i=0 ; i< this.rightside_inner_statement_model.length ; i++){
          if(typeof(this.rightside_inner_statement_model[i].eid) === 'string' ){
            k = permittedValues_string.find(o=> o === this.rightside_inner_statement_model[i].eid)
            if(k !== undefined)  local_array3.push(this.rightside_inner_statement_model[i])
          }
          if(typeof(this.rightside_inner_statement_model[i].eid) === 'object' ){
            key = Object.keys(this.rightside_inner_statement_model[i].eid);
            k = permittedValues_object.find(o => o === key[0])
            if(k !== undefined)  local_array3.push(this.rightside_inner_statement_model[i])
          }
        }
        this.rightside_inner_statement_model  = local_array3
      } else {
        this.rightside_triger_statement_model = [];
        this.rightside_inner_statement_model = [];
      }
    },
    rightside_edit_statement_model_computed: function () {
      if (this.rightside_edit_statement_model.length != 0) {
        var section_ids = this.rightside_edit_statement_model.map(function (
          el
        ) {
          return el.id;
        });
        var id = this.rightside_edit_statement_model[0].card_id;
        var item = this.document.leftSide.card[id - 1];
        var item_filtered = item.section.filter((item) =>
          section_ids.includes(item.eid)
        );
        var i, j, test_field;
        var array = [];
        var array_2 = [];
        for (i = 0; i < item_filtered.length; i++) {
          if (item_filtered[i].type === "textfield") {
            for (j = 0; j < item_filtered[i].fields.length; j++) {
              test_field = {
                eid: item_filtered[i].fields[j].eid,
                label: item_filtered[i].fields[j].line,
                statement: item_filtered[i].statement,
                mixture:
                  item_filtered[i].statement +
                  " - " +
                  item_filtered[i].fields[j].line,
              };
              array.push(test_field);
              array_2.push(test_field);
            }
          }
          if (item_filtered[i].type === "radio") {
            var test_field_2 = {
              eid: item_filtered[i].eid,
              // eid: item_filtered[i].fields[j].eid,
              label: "radio",
              statement: item_filtered[i].statement,
              mixture: item_filtered[i].statement + " - " + "radio",
            };
            array_2.push(test_field_2);
            for (j = 0; j < item_filtered[i].fields.length; j++) {
              var obj_radio_fields = {};
              obj_radio_fields[item_filtered[i].eid] =
                item_filtered[i].fields[j].value;
              test_field = {
                eid: obj_radio_fields,
                // eid: item_filtered[i].fields[j].eid,
                label: item_filtered[i].fields[j].line,
                statement: item_filtered[i].statement,
                mixture:
                  item_filtered[i].statement +
                  " - " +
                  item_filtered[i].fields[j].line,
              };
              array.push(test_field);
            }
          }
          if (item_filtered[i].type === "checkbox") {
            test_field = {
              eid: item_filtered[i].eid,
              label: "checkbox",
              statement: item_filtered[i].statement,
              mixture: item_filtered[i].statement + " - " + "checkbox",
            };
            array.push(test_field);
            array_2.push(test_field);
          }
          if (item_filtered[i].type === "dropselect") {
            test_field = {
              eid: item_filtered[i].eid,
              label: "dropselect",
              statement: item_filtered[i].statement,
              mixture: item_filtered[i].statement + " - " + "dropselect",
            };
            array.push(test_field);
            array_2.push(test_field);
          }
        }
        this.leftside_edit_eachpannal_all_inner_statement = array_2;
        this.leftside_edit_triger_eachpannal_all_inner_statement = array;
        
        // functionality pehli field ko jb unselect krty hain to second model ma value khtm krny k liye
        var local_array3 = [],permittedValues,permittedValues_string = [],permittedValues_object = [],k,key;
        permittedValues = this.leftside_edit_triger_eachpannal_all_inner_statement.map(value => value.eid);
        for(i=0; i< permittedValues.length ; i++){
          if(typeof(permittedValues[i]) === 'string'){ permittedValues_string.push(permittedValues[i]) }
          if(typeof(permittedValues[i]) === 'object'){
          key = Object.keys(permittedValues[i]) 
           permittedValues_object.push(key[0]) 
          }
        }
       permittedValues_object = [...new Set(permittedValues_object)];
        for(i=0 ; i< this.rightside_edit_triger_statement_model.length ; i++){
          if(typeof(this.rightside_edit_triger_statement_model[i].eid) === 'string' ){
            k = permittedValues_string.find(o=> o === this.rightside_edit_triger_statement_model[i].eid)
            if(k !== undefined)  local_array3.push(this.rightside_edit_triger_statement_model[i])
          }
          if(typeof(this.rightside_edit_triger_statement_model[i].eid) === 'object' ){
            key = Object.keys(this.rightside_edit_triger_statement_model[i].eid);
    
            k = permittedValues_object.find(o => o === key[0])
            if(k !== undefined)  local_array3.push(this.rightside_edit_triger_statement_model[i])
          }
        }
        this.rightside_edit_triger_statement_model  = local_array3
        
        //// functionality pehli field ko jb unselect krty hain to third model ma value khtm krny k liye
        local_array3 = []
        permittedValues = []
        permittedValues_string = []
        permittedValues_object = []
        permittedValues = this.leftside_edit_eachpannal_all_inner_statement.map(value => value.eid);
        for(i=0; i< permittedValues.length ; i++){
          if(typeof(permittedValues[i]) === 'string'){ permittedValues_string.push(permittedValues[i]) }
          if(typeof(permittedValues[i]) === 'object'){
           key = Object.keys(permittedValues[i]) 
           permittedValues_object.push(key[0]) 
          }
        }
        permittedValues_object = [...new Set(permittedValues_object)];
        for(i=0 ; i< this.rightside_edit_inner_statement_model.length ; i++){
          if(typeof(this.rightside_edit_inner_statement_model[i].eid) === 'string' ){
            k = permittedValues_string.find(o=> o === this.rightside_edit_inner_statement_model[i].eid)
            if(k !== undefined)  local_array3.push(this.rightside_edit_inner_statement_model[i])
          }
          if(typeof(this.rightside_edit_inner_statement_model[i].eid) === 'object' ){
            key = Object.keys(this.rightside_edit_inner_statement_model[i].eid);
            k = permittedValues_object.find(o => o === key[0])
            if(k !== undefined)  local_array3.push(this.rightside_edit_inner_statement_model[i])
          }
        }
        this.rightside_edit_inner_statement_model  = local_array3
        // var len = this.rightside_edit_triger_statement_model.length
        // for(i=len ; i > 0 ; i--){
        //   console.log(i)
        //   var k = this.leftside_edit_triger_eachpannal_all_inner_statement.find(o => o.eid === this.rightside_edit_triger_statement_model[i-1].eid)
        //   console.log(k)
        //   if(k === undefined ) this.rightside_edit_triger_statement_model.splice(i,1)
        // }
      }
      // else{
      //   this.rightside_triger_statement_model = []
      //   this.rightside_inner_statement_model = []
      // }
    },
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
        if (this.document.leftSide.card[i].type === undefined) {
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
                  this.document.rightSide.card[i].section[
                    j
                  ].inner_heading_value_display = this.adjust_front_end_inner_heading_value_display(
                    this.document.rightSide.card[i].section[j]
                      .inner_heading_value,
                    this.document.rightSide.card[i].section[j]
                      .dependent_values[0].display
                  );
                  section_counter++;
                }
              }
            }
          }
        }
        if (section_counter > 2) {
          this.document.rightSide.card[
            i
          ].section_inner_value_counter_greater_than_one = true;
        } else if (section_counter <= 2) {
          this.document.rightSide.card[
            i
          ].section_inner_value_counter_greater_than_one = false;
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
    //   right_side_import_data_model_computed: function () {
    //   return this.right_side_import_data_model, new Date();
    // },
    rightside_edit_user_field_input_selection: function () {
      return this.rightside_edit_inner_statement_model, new Date();
    },
    rightside_user_field_input_selection: function () {
      return this.rightside_inner_statement_model, new Date();
    },
    rightside_statement_model_computed: function () {
      return this.rightside_statement_model, new Date();
    },
    rightside_edit_statement_model_computed: function () {
      return this.rightside_edit_statement_model, new Date();
    },
    // editorComputed: function(){
    //   //  this.editor.element.innerText=`ghghghghghghgh`
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
    ...mapState([
      "help",
      "maincolor",
      "importcontract",
      "eyecheck",
      "import_pdf_png_content",
    ]),
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
    writeinfilesystem_inamazon(){
      const configDir =  (electron.app || electron.remote.app).getPath('userData')
      var filepath_dir = path.join(configDir,this.$version_data)
      if (!fs.existsSync(filepath_dir)){
        fs.mkdirSync(filepath_dir);
      }
      var contract = JSON.parse(localStorage.getItem('contract_for_file_system'))
      var group_title,group_id,folder,filepath,filename,filepath_contract,contract_id,contract_front_title
      group_title = contract.group_title
      group_id = contract.group_id
      contract_id = contract.id
      //contract_title = contract.title
      contract_front_title = contract.front_title
      folder = group_title + '_' + group_id
      filepath = path.join(filepath_dir,folder)
      if (!fs.existsSync(filepath)){
        fs.mkdirSync(filepath);
      }
      else{
        var data = JSON.stringify(this.document);
        const encrypteddata = cryptr.encrypt(data);
        filename  = contract_front_title + '_' + contract_id + '_' + group_id + ".json";
        filepath_contract  = path.join(filepath,filename)
        fs.writeFileSync(filepath_contract, encrypteddata); //needs to be changed for a minute
      } 
    },
    setting_properties_to_default(){
       for (var i = 0; i < this.document.rightSide.card.length; i++) {
          for (
            var j = 0;
            j < this.document.rightSide.card[i].section.length;
            j++
          ) {
            this.document.rightSide.card[i].section[j].tiptapedit = false;
            this.document.rightSide.card[i].section[j].contentedit = false;
          }
        }
    },
    pannalprogress2_func(){
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
                  this.document.rightSide.card[i].section[
                    j
                  ].inner_heading_value_display = this.adjust_front_end_inner_heading_value_display(
                    this.document.rightSide.card[i].section[j]
                      .inner_heading_value,
                    this.document.rightSide.card[i].section[j]
                      .dependent_values[0].display
                  );
                  section_counter++;
                }
              }
            }
          }
        }
        if (section_counter > 2) {
          this.document.rightSide.card[
            i
          ].section_inner_value_counter_greater_than_one = true;
        } else if (section_counter <= 2) {
          this.document.rightSide.card[
            i
          ].section_inner_value_counter_greater_than_one = false;
        }
      }
    },
    close_edit_content(section){
      section.contentedit = false
    },
    reset_signature(){
      for(var i =0; i<this.document.leftSide.card.length; i++){
        if(this.document.leftSide.card[i].type === "signature_card"){
          this.document.leftSide.card[i].completed_fields = 0
          this.document.leftSide.card[i].signature = false
          this.document.leftSide.card[i].signaturedata = ""; 
          this.document.leftSide.card[i].signaturename = ""
          this.document.leftSide.card[i].signaturedate =null
          this.document.leftSide.card[i].signatureposition = "center"
        }
      }
      for(i =0; i<this.document.rightSide.card.length; i++){
        if(this.document.rightSide.card[i].type === "signature_card"){
          this.document.rightSide.card[i].signature = false
          this.document.rightSide.card[i].signaturedata = ""; 
          this.document.rightSide.card[i].signaturename = ""
          this.document.rightSide.card[i].signaturedate =null
          this.document.rightSide.card[i].signatureposition = "center"
        }
      }
      this.deleteinfilesystemsignature_inamazon()
    },
      undo_signature() {
      this.$refs.signaturePad[0].undoSignature();
    },
   save_signature() {
      const { data } = this.$refs.signaturePad[0].saveSignature();
      var name,date,position
      if(data !== undefined){
        for(var i =0; i<this.document.leftSide.card.length; i++){
          if(this.document.leftSide.card[i].type === "signature_card"){
            this.document.leftSide.card[i].completed_fields = 1
            this.document.leftSide.card[i].signature = true
            this.document.leftSide.card[i].signaturedata = data;
            name = this.document.leftSide.card[i].signaturename
            date = this.document.leftSide.card[i].signaturedate
            position = this.document.leftSide.card[i].signatureposition 
          }
        }
        for(i =0; i<this.document.rightSide.card.length; i++){
          if(this.document.rightSide.card[i].type === "signature_card"){
            this.document.rightSide.card[i].signature = true
            this.document.rightSide.card[i].signaturedata = data;
            this.document.rightSide.card[i].signaturename = name
            this.document.rightSide.card[i].signaturedate = date
            this.document.rightSide.card[i].signatureposition = position
          }
        }
        this.writeinfilesystemsignature_inamazon(data)
      }
    },
    writeinfilesystemsignature_inamazon(data){
      const configDir =  (electron.app || electron.remote.app).getPath('userData')
      var filepath_dir = path.join(configDir,this.$version_data)
      if (!fs.existsSync(filepath_dir)){
        fs.mkdirSync(filepath_dir);
      }
      var contract = JSON.parse(localStorage.getItem('contract_for_file_system'))
      var group_title,group_id,folder,filepath,filename,filepath_contract,contract_id,contract_front_title
      group_title = contract.group_title
      group_id = contract.group_id
      contract_id = contract.id
      //contract_title = contract.title
      contract_front_title = contract.front_title
      folder = group_title + '_' + group_id
      filepath = path.join(filepath_dir,folder)
      if (!fs.existsSync(filepath)){
        fs.mkdirSync(filepath);
      }
      else{
        var encrypteddata = data.replace(/^data:image\/png;base64,/, "")
        filename  = contract_front_title + '_' + contract_id + '_' + group_id + "-signature.png";
        filepath_contract  = path.join(filepath,filename)
        fs.writeFileSync(filepath_contract, encrypteddata,{encoding: 'base64'}); //needs to be changed for a minute
      } 
    },
    deleteinfilesystemsignature_inamazon(){
      const configDir =  (electron.app || electron.remote.app).getPath('userData')
      var filepath_dir = path.join(configDir,this.$version_data)
      // if (!fs.existsSync(filepath_dir)){
      //   fs.mkdirSync(filepath_dir);
      // }
      var contract = JSON.parse(localStorage.getItem('contract_for_file_system'))
      var group_title,group_id,folder,filepath,filename,filepath_contract,contract_id,contract_front_title
      group_title = contract.group_title
      group_id = contract.group_id
      contract_id = contract.id
      //contract_title = contract.title
      contract_front_title = contract.front_title
      folder = group_title + '_' + group_id
      filepath = path.join(filepath_dir,folder)
      // if (!fs.existsSync(filepath)){
      //   fs.mkdirSync(filepath);
      // }
      // else{
      filename  = contract_front_title + '_' + contract_id + '_' + group_id + "-signature.png";
      filepath_contract  = path.join(filepath,filename)
      fs.unlinkSync(filepath_contract)
      //} 
    },
    left_side_delete_text_fields(leftside_field) {
      this.Text_filed_items.splice(
        this.Text_filed_items.findIndex(
          (o) => JSON.stringify(o) === JSON.stringify(leftside_field)
        ),
        2
      );
    },
    leftside_delete_checkbox(leftside_field) {
      this.checkbox_items.splice(
        this.checkbox_items.findIndex(
          (o) => JSON.stringify(o) === JSON.stringify(leftside_field)
        ),
        2
      );
    },
    leftside_delete_dropdown(leftside_field) {
      this.drop_down_items.splice(
        this.drop_down_items.findIndex(
          (o) => JSON.stringify(o) === JSON.stringify(leftside_field)
        ),
        1
      );
    },
    leftside_delete_radiobtn(leftside_field) {
      this.radio_button_items.splice(
        this.radio_button_items.findIndex(
          (o) => JSON.stringify(o) === JSON.stringify(leftside_field)
        ),
        2
      );
    },

    left_side_edit_delete_text_fields(leftside_field) {
      this.Text_filed_items1.splice(
        this.Text_filed_items1.findIndex(
          (o) => JSON.stringify(o) === JSON.stringify(leftside_field)
        ),
        2
      );
    },
    leftside_edit_delete_checkbox(leftside_field) {
      this.checkbox_items1.splice(
        this.checkbox_items1.findIndex(
          (o) => JSON.stringify(o) === JSON.stringify(leftside_field)
        ),
        2
      );
    },
    leftside_edit_delete_dropdown(leftside_field) {
      this.drop_down_items1.splice(
        this.drop_down_items1.findIndex(
          (o) => JSON.stringify(o) === JSON.stringify(leftside_field)
        ),
        1
      );
    },
    leftside_edit_delete_radiobtn(leftside_field) {
      this.radio_button_items1.splice(
        this.radio_button_items1.findIndex(
          (o) => JSON.stringify(o) === JSON.stringify(leftside_field)
        ),
        2
      );
    },
    add_new_card(item) {
      let left_copy_of_card = {
        id: null,
        eye: false,
        name: "New Card",
        name_edit: false,
        total_fields: 0,
        completed_fields: 0,
        linearprogressvalue: 0,
        isactive: false,
        isedited: false,
        havesomevalue: false,
        import_counter: 0,
        section_id_length: 0,
        section: [],
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
    update_total_fields_of_left_side_of_card(section_id) {
      let ids = this.document.leftSide.card.find((o) => o.id === section_id);
      var counter = 0;
      for (const obj of ids.section) {
        if (
          obj.type === "radio" ||
          obj.type === "dropselect" ||
          obj.type === "checkbox"
        )
          counter++;
        if (obj.type === "textfield") counter = counter + obj.fields.length;
      }
      ids.total_fields = counter;
    },
    right_side_delete_content(card_id, section) {
      var section_index = this.document.rightSide.card[
        card_id - 1
      ].section.findIndex((o) => JSON.stringify(o) === JSON.stringify(section));
      this.document.rightSide.card[card_id - 1].section.splice(
        section_index,
        1
      );
    },
    right_side_edit_data_submit() {
      var id = this.rightside_edit_statement_model[0].card_id - 1;
      var trigger_depend = this.rightside_edit_triger_statement_model.map(
        function (el) {
          return el.eid;
        }
      );
      var trigger_depend_2 = this.rightside_edit_inner_statement_model.map(
        function (el) {
          return el.eid;
        }
      );
      var heading_number, inner_heading_number, strong_property;
      // strong_property;
      // font_style,
      if (this.right_side_edit_section_heading_model === "Ja") {
        // font_style = "text-align: center; font-weight: 700;font-size: 16px"
        heading_number = true;
        inner_heading_number = false;
        strong_property = true;
      } else if (this.right_side_edit_section_heading_model === "Nein") {
        // font_style = "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;"
        heading_number = false;
        inner_heading_number = false;
        strong_property = false;
        if (this.right_side_edit_inner_heading_model === "Ja") {
          inner_heading_number = true;
        }
      }
      // var obj = {
      //   if: true,
      //   type: "or",
      //   dependent_values: [
      //     {
      //       depend_upon: trigger_depend_2,
      //       display: this.right_side_edit_import_data_model,
      //     },
      //   ],
      //   values_on_which_depend: trigger_depend,
      //   value: "", //
      //   display: "",
      //   style:font_style,
      //   isStrong: strong_property,
      //   afterlinebreak: this.right_side_edit_line_break_model,
      //   heading_property_number: heading_number,
      //   heading_value: 0,
      //   inner_heading_property_number: inner_heading_number,
      //   inner_heading_value: 0,
      //   inner_heading_value_display: "",
      //   tiptapedit: false,
      //   displayed: false,
      // }
      // console.log(obj)
      this.document.rightSide.card[id].section[
        this.right_side_statement_number
      ].dependent_values[0].depend_upon = trigger_depend_2;
      this.document.rightSide.card[id].section[
        this.right_side_statement_number
      ].dependent_values[0].display = this.right_side_edit_import_data_model;
      this.document.rightSide.card[id].section[
        this.right_side_statement_number
      ].values_on_which_depend = trigger_depend;
      this.document.rightSide.card[id].section[
        this.right_side_statement_number
      ].afterlinebreak = this.right_side_edit_line_break_model;
      this.document.rightSide.card[id].section[
        this.right_side_statement_number
      ].heading_property_number = heading_number;
      this.document.rightSide.card[id].section[
        this.right_side_statement_number
      ].inner_heading_property_number = inner_heading_number;
      this.document.rightSide.card[id].section[
        this.right_side_statement_number
      ].isStrong = strong_property;
      this.snackbar = true;
      this.document.rightSide.card[id].section[
        this.right_side_statement_number
      ].contentedit= false;
      this.pannalprogress2_func()
      // this.rightside_edit_triger_statement_model=[];
      // this.rightside_edit_inner_statement_model = [];
      // this.rightside_edit_statement_model= [];
      // this.right_side_edit_inner_heading_model="";
      // this.right_side_edit_line_break_model="";
      // this.right_side_edit_section_heading_model="";
      // this.right_side_edit_import_data_model=[];
    },
    right_side_data_submit() {
      var trigger_depend = this.rightside_triger_statement_model.map(function (
        el
      ) {
        return el.eid;
      });
      var trigger_depend_2 = this.rightside_inner_statement_model.map(function (
        el
      ) {
        return el.eid;
      });
      var font_style, heading_number, inner_heading_number, strong_property;
      if (this.right_side_section_heading_model === "Ja") {
        font_style = "text-align: center; font-weight: 700;font-size: 16px";
        heading_number = true;
        inner_heading_number = false;
        strong_property = true;
      } else if (this.right_side_section_heading_model === "Nein") {
        font_style =
          "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;";
        heading_number = false;
        inner_heading_number = false;
        strong_property = false;
        if (this.right_side_inner_heading_model === "Ja") {
          inner_heading_number = true;
        }
      }
      //
      var obj = {
        if: true,
        type: "or",
        dependent_values: [
          {
            depend_upon: trigger_depend_2,
            display: this.right_side_import_data_model,
          },
        ],
        values_on_which_depend: trigger_depend,
        value: "", //
        display: "",
        style: font_style,
        isStrong: strong_property,
        afterlinebreak: this.right_side_line_break_model,
        heading_property_number: heading_number,
        heading_value: 0,
        inner_heading_property_number: inner_heading_number,
        inner_heading_value: 0,
        inner_heading_value_display: "",
        tiptapedit: false,
        displayed: false,
      };
      var id = this.rightside_statement_model[0].card_id;
      this.document.rightSide.card[id - 1].section.push(obj);
      this.snackbar = true;
      this.rightsidedata = false;
      this.rightside_triger_statement_model = [];
      this.rightside_inner_statement_model = [];
      this.rightside_statement_model = [];
      this.right_side_inner_heading_model = "";
      this.right_side_line_break_model = "";
      this.right_side_section_heading_model = "";
      this.right_side_import_data_model = [];
    },
    right_side_edit_content(card_id, section) {
      section.tiptapedit = false
      this.right_side_statement_number = this.document.rightSide.card[
        card_id - 1
      ].section.findIndex((o) => JSON.stringify(o) === JSON.stringify(section));
      this.function1_right_side_edit_content(card_id); // dropdown chalany k liye
      this.function2_right_side_edit_content(section); // edit ki pehli fields ko fill krny k liye (on which sections, it will depend )
      this.function3_right_side_edit_content(); //fields up to date krny k liye
      this.function4_right_side_edit_content(section); // values_on_which_depend
      this.function5_right_side_edit_content(section); // dependent_values
      this.function6_right_side_edit_content(section); // remaining mini fields
      section.contentedit = true
      this.right_side_edit_content_card = !this.right_side_edit_content_card;
      this.rightsidedata = false;
    },
    function1_right_side_edit_content(card_id) {
      var all_statements = this.document.leftSide.card[card_id - 1].section.map(
        function (el) {
          var obj = {
            statement: el.statement,
            id: el.eid,
            card_id: card_id,
            type: el.type,
          };
          return obj;
        }
      );
      this.leftside_edit_eachpannal_all_statement = all_statements;
    },
    function2_right_side_edit_content(section) {
      var i;
      var local_array = [];
      if (section.values_on_which_depend.length !== 0) {
        let array_merged = section.values_on_which_depend.concat(
          section.dependent_values[0].depend_upon
        );
        for (i = 0; i < array_merged.length; i++) {
          if (typeof array_merged[i] === "object") {
            var key = Object.keys(array_merged[i]);
            local_array.push(key[0]);
          } else if (typeof array_merged[i] === "string") {
            var str = array_merged[i].split("-");
            local_array.push(str[0]);
          }
        }
      }
      var local_array_unique = local_array.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
      this.rightside_edit_statement_model = [];
      for (i = 0; i < local_array_unique.length; i++) {
        var found = this.leftside_edit_eachpannal_all_statement.find(
          (o) => o.id === local_array_unique[i]
        );
        if (found !== undefined) {
          this.rightside_edit_statement_model.push(found);
        }
      }
    },
    function3_right_side_edit_content() {
      if (this.rightside_edit_statement_model.length != 0) {
        var section_ids = this.rightside_edit_statement_model.map(function (
          el
        ) {
          return el.id;
        });
        var id = this.rightside_edit_statement_model[0].card_id;
        var item = this.document.leftSide.card[id - 1];
        var item_filtered = item.section.filter((item) =>
          section_ids.includes(item.eid)
        );
        var i, j, test_field;
        var array = [];
        var array_2 = [];
        for (i = 0; i < item_filtered.length; i++) {
          if (item_filtered[i].type === "textfield") {
            for (j = 0; j < item_filtered[i].fields.length; j++) {
              test_field = {
                eid: item_filtered[i].fields[j].eid,
                label: item_filtered[i].fields[j].line,
                statement: item_filtered[i].statement,
                mixture:
                  item_filtered[i].statement +
                  " - " +
                  item_filtered[i].fields[j].line,
              };
              array.push(test_field);
              array_2.push(test_field);
            }
          }
          if (item_filtered[i].type === "radio") {
            var test_field_2 = {
              eid: item_filtered[i].eid,
              // eid: item_filtered[i].fields[j].eid,
              label: "radio",
              statement: item_filtered[i].statement,
              mixture: item_filtered[i].statement + " - " + "radio",
            };
            array_2.push(test_field_2);
            for (j = 0; j < item_filtered[i].fields.length; j++) {
              var obj_radio_fields = {};
              obj_radio_fields[item_filtered[i].eid] =
                item_filtered[i].fields[j].value;

              test_field = {
                eid: obj_radio_fields,
                // eid: item_filtered[i].fields[j].eid,
                label: item_filtered[i].fields[j].line,
                statement: item_filtered[i].statement,
                mixture:
                  item_filtered[i].statement +
                  " - " +
                  item_filtered[i].fields[j].line,
              };
              array.push(test_field);
            }
          }
          if (item_filtered[i].type === "checkbox") {
            test_field = {
              eid: item_filtered[i].eid,
              label: "checkbox",
              statement: item_filtered[i].statement,
              mixture: item_filtered[i].statement + " - " + "checkbox",
            };
            array.push(test_field);
            array_2.push(test_field);
          }
          if (item_filtered[i].type === "dropselect") {
            test_field = {
              eid: item_filtered[i].eid,
              label: "dropselect",
              statement: item_filtered[i].statement,
              mixture: item_filtered[i].statement + " - " + "dropselect",
            };
            array.push(test_field);
            array_2.push(test_field);
          }
        }
        this.leftside_edit_eachpannal_all_inner_statement = array_2;
        this.leftside_edit_triger_eachpannal_all_inner_statement = array;
      }
      // else{
      //   this.rightside_triger_statement_model = []
      //   this.rightside_inner_statement_model = []
      // }
    },
    function4_right_side_edit_content(section) {
      var i;
      var local_array_trigger = [];
      for (i = 0; i < section.values_on_which_depend.length; i++) {
        if (typeof section.values_on_which_depend[i] === "object") {
          var found2 =
            this.leftside_edit_triger_eachpannal_all_inner_statement.find(
              (o) =>
                JSON.stringify(o.eid) ===
                JSON.stringify(section.values_on_which_depend[i])
            );
          if (found2 !== undefined) {
            local_array_trigger.push(found2);
          }
        } else if (typeof section.values_on_which_depend[i] === "string") {
          found2 =
            this.leftside_edit_triger_eachpannal_all_inner_statement.find(
              (o) => o.eid === section.values_on_which_depend[i]
            );
          if (found2 !== undefined) {
            local_array_trigger.push(found2);
          }
        }
      }
      this.rightside_edit_triger_statement_model = local_array_trigger;
    },
    function5_right_side_edit_content(section) {
      var i;
      var local_array_dependent = [];
      for (i = 0; i < section.dependent_values[0].depend_upon.length; i++) {
        if (typeof section.dependent_values[0].depend_upon[i] === "object") {
          var found3 = this.leftside_edit_eachpannal_all_inner_statement.find(
            (o) =>
              JSON.stringify(o.eid) ===
              JSON.stringify(section.dependent_values[0].depend_upon[i])
          );
          if (found3 !== undefined) {
            local_array_dependent.push(found3);
          }
        } else if (
          typeof section.dependent_values[0].depend_upon[i] === "string"
        ) {
          found3 = this.leftside_edit_eachpannal_all_inner_statement.find(
            (o) => o.eid === section.dependent_values[0].depend_upon[i]
          );
          if (found3 !== undefined) {
            local_array_dependent.push(found3);
          }
        }
      }
      this.rightside_edit_inner_statement_model_decrement_or_increment =
        local_array_dependent.length;
      this.rightside_edit_inner_statement_model = local_array_dependent;
    },
    function6_right_side_edit_content(section) {
      var div = document.createElement("div");
      div.innerHTML = section.dependent_values[0].display;
      var text = div.textContent || div.innerText ||  "";
      this.right_side_edit_import_data_model = text
        
      //
      if (section.heading_property_number === true) {
        this.right_side_edit_section_heading_model = "Ja";
      } else if (section.heading_property_number === false) {
        this.right_side_edit_section_heading_model = "Nein";
      }
      //
      if (section.inner_heading_property_number === true) {
        this.right_side_edit_inner_heading_model = "Ja";
      } else if (section.inner_heading_property_number === false) {
        this.right_side_edit_inner_heading_model = "Nein";
      }
      //
      this.right_side_edit_line_break_model = section.afterlinebreak;
    },
    copy_import_data_func(import_data_item) {
      this.right_side_import_data_model =
        this.right_side_import_data_model + " " + import_data_item;
    },
    copy_import_edit_data_func(import_data_item) {
      this.right_side_edit_import_data_model =
        this.right_side_edit_import_data_model + " " + import_data_item;
    },
    right_side_data_import_func() {
      this.right_side_import_data = !this.right_side_import_data;
      var i;
      var exact_pages_to_extract = 0;
      var array_value = this.import_pdf_png_content;
      var array = [];
      //Extract Pages
      for (i = 0; i < array_value.length; i++) {
        if (array_value[i] !== "") {
          exact_pages_to_extract = exact_pages_to_extract + 1;
        }
      }
      //Push pages values in single array
      for (i = 0; i < exact_pages_to_extract; i++) {
        var array_value_2 = array_value[i];
        array.push(array_value_2.split("\n"));
      }
      var merged = [].concat.apply([], array);
      var filtered = merged.filter((word) => word.length !== 0);
      this.data_import_pdf_png_content = filtered;
    },
    right_side_edit_data_import_func() {
      this.right_side_edit_import_data = !this.right_side_edit_import_data;
      var i;
      var exact_pages_to_extract = 0;
      var array_value = this.import_pdf_png_content;
      var array = [];
      //Extract Pages
      for (i = 0; i < array_value.length; i++) {
        if (array_value[i] !== "") {
          exact_pages_to_extract = exact_pages_to_extract + 1;
        }
      }
      //Push pages values in single array
      for (i = 0; i < exact_pages_to_extract; i++) {
        var array_value_2 = array_value[i];
        array.push(array_value_2.split("\n"));
      }
      var merged = [].concat.apply([], array);
      var filtered = merged.filter((word) => word.length !== 0);
      this.data_import_pdf_png_content = filtered;
    },
    left_right_side_data_enter(item) {
      this.rightsidedata = !this.rightsidedata;
      this.right_side_edit_content_card = false;
      var all_statements = item.section.map(function (el) {
        var obj = {
          statement: el.statement,
          id: el.eid,
          card_id: item.id,
          type: el.type,
        };
        return obj;
      });
      this.leftside_eachpannal_all_statement = all_statements;
    },
    drag_functionstart() {
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        if (this.document.leftSide.card[i].isactive == true) {
          this.pannal_active_drag_check = this.document.leftSide.card[i].name;
          return;
        }
      }
      this.pannal_active_drag_check = "";
    },
    drag_function() {
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
    deletecontentfromcard(card_no, content_no) {
      var obj1 = this.document.leftSide.card.find((o) => o.id === card_no);
      var obj2 = obj1.section;
      var obj3 = obj2.filter((a) => {
        if (a.eid !== content_no) {
          return a;
        }
      });
      obj1.section = obj3;
      this.update_total_fields_of_left_side_of_card(card_no);
    },
    editcontentoutside() {},
    editfieldfunc(x, y) {
      // x is all fields like text filed , radio , checkbox, dropselect
      // y is section item
      this.editfieldshow = x;
      if (y.type === "textfield") {
        this.radio_button_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
          {
            id: 4,
            title: "Add Another Radio Field",
            icon: "mdi-shape-square-rounded-plus",
            value: true,
          },
        ];
        this.drop_down_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-arrow-down-drop-circle-outline",
            value: true,
            type: "drop-down-option",
          },
          {
            id: 3,
            title: "Add Another drop-down-option",
            icon: "mdi-form-dropdown",
            value: true,
          },
        ];
        this.checkbox_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
          {
            id: 4,
            title: "Add Another Checkbox",
            icon: "mdi-checkbox-marked-outline",
            value: true,
          },
        ];
        // this.Text_filed_items1=[
        //   {id:2,title:"",icon:"mdi-label-outline",value:true,type:"label"},
        //   {id:3,title:"Add Size of Text Filed",icon:"mdi-arrow-left-right-bold-outline",value:true,type:"slider",slidervalue:"6",},
        //   {id:4,title:"Add more than one text-filed for one statement",icon:"mdi-shape-square-rounded-plus",value:true,},
        // ]
      } else if (y.type === "radio") {
        // this.radio_button_items1=[
        //   {id:2,title:"",icon:"mdi-label-outline",value:true,type:"label"},
        //   {id:3,title:"",icon:"mdi-tag-text-outline",value:true,type:"right-side-text",},
        //   {id:4,title:"Add Another Radio Field",icon:"mdi-shape-square-rounded-plus",value:true,},
        // ]
        this.drop_down_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-arrow-down-drop-circle-outline",
            value: true,
            type: "drop-down-option",
          },
          {
            id: 3,
            title: "Add Another drop-down-option",
            icon: "mdi-form-dropdown",
            value: true,
          },
        ];
        this.checkbox_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
          {
            id: 4,
            title: "Add Another Checkbox",
            icon: "mdi-checkbox-marked-outline",
            value: true,
          },
        ];
        this.Text_filed_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "Add Size of Text Filed",
            icon: "mdi-arrow-left-right-bold-outline",
            value: true,
            type: "slider",
            slidervalue: "6",
          },
          {
            id: 4,
            title: "Add more than one text-filed for one statement",
            icon: "mdi-shape-square-rounded-plus",
            value: true,
          },
        ];
      } else if (y.type === "checkbox") {
        this.radio_button_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
          {
            id: 4,
            title: "Add Another Radio Field",
            icon: "mdi-shape-square-rounded-plus",
            value: true,
          },
        ];
        this.drop_down_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-arrow-down-drop-circle-outline",
            value: true,
            type: "drop-down-option",
          },
          {
            id: 3,
            title: "Add Another drop-down-option",
            icon: "mdi-form-dropdown",
            value: true,
          },
        ];
        // this.checkbox_items1=[
        //   {id:2,title:"",icon:"mdi-label-outline",value:true,type:"label"},
        //   {id:3,title:"",icon:"mdi-tag-text-outline",value:true,type:"right-side-text",},
        //   {id:4,title:"Add Another Checkbox",icon:"mdi-checkbox-marked-outline",value:true,},
        // ]
        this.Text_filed_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "Add Size of Text Filed",
            icon: "mdi-arrow-left-right-bold-outline",
            value: true,
            type: "slider",
            slidervalue: "6",
          },
          {
            id: 4,
            title: "Add more than one text-filed for one statement",
            icon: "mdi-shape-square-rounded-plus",
            value: true,
          },
        ];
      } else if (y.type === "dropselect") {
        this.radio_button_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
          {
            id: 4,
            title: "Add Another Radio Field",
            icon: "mdi-shape-square-rounded-plus",
            value: true,
          },
        ];
        // this.drop_down_items1=[
        //   {id:2,title:"",icon:"mdi-arrow-down-drop-circle-outline",value:true,type:"drop-down-option"},
        //   {id:3,title:"Add Another drop-down-option",icon:"mdi-form-dropdown",value:true,},
        // ]
        this.checkbox_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
          {
            id: 4,
            title: "Add Another Checkbox",
            icon: "mdi-checkbox-marked-outline",
            value: true,
          },
        ];
        this.Text_filed_items1 = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "Add Size of Text Filed",
            icon: "mdi-arrow-left-right-bold-outline",
            value: true,
            type: "slider",
            slidervalue: "6",
          },
          {
            id: 4,
            title: "Add more than one text-filed for one statement",
            icon: "mdi-shape-square-rounded-plus",
            value: true,
          },
        ];
      }
    },
    edit_section_content_of_card(section_item) {
      section_item.value = null;
      var i, j;
      section_item.editcontent = !section_item.editcontent;
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        for (j = 0; j < this.document.leftSide.card[i].section.length; j++) {
          if (
            this.document.leftSide.card[i].section[j].editcontent === true &&
            this.document.leftSide.card[i].section[j].statement !==
              section_item.statement
          ) {
            this.document.leftSide.card[i].section[j].editcontent = false;
          }
        }
      }
      if (section_item.type === "textfield") {
        this.editfieldshow = "Text Field";
        var obj_id_count = 1;
        var array = [];
        for (i = 0; i < section_item.fields.length; i++) {
          var obj1 = {
            id: obj_id_count,
            title: section_item.fields[i].line,
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          };
          array.push(obj1);
          obj_id_count = obj_id_count + 1;
          var size = section_item.fields[i].size;
          var size_2 = size.split("-");
          var size_3 = size_2[1];
          var obj2 = {
            id: obj_id_count,
            title: "Add Size of Text Filed",
            icon: "mdi-arrow-left-right-bold-outline",
            value: true,
            type: "slider",
            slidervalue: size_3,
          };
          obj_id_count = obj_id_count + 1;
          array.push(obj2);
        }
        var obj3 = {
          id: obj_id_count,
          title: "Add more than one text-filed for one statement",
          icon: "mdi-shape-square-rounded-plus",
          value: true,
        };
        array.push(obj3);
        this.Text_filed_items1 = array;
      } else if (section_item.type === "radio") {
        this.editfieldshow = "Radio Button";
        obj_id_count = 1;
        array = [];
        for (i = 0; i < section_item.fields.length; i++) {
          obj1 = {
            id: obj_id_count,
            title: section_item.fields[i].line,
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          };
          array.push(obj1);
          obj_id_count = obj_id_count + 1;
          obj2 = {
            id: obj_id_count,
            title: section_item.fields[i].value,
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          };
          obj_id_count = obj_id_count + 1;
          array.push(obj2);
        }
        obj3 = {
          id: obj_id_count,
          title: "Add Another Radio Field",
          icon: "mdi-shape-square-rounded-plus",
          value: true,
        };
        array.push(obj3);
        this.radio_button_items1 = array;
      } else if (section_item.type === "checkbox") {
        this.editfieldshow = "Check Boxes";
        obj_id_count = 1;
        array = [];
        for (i = 0; i < section_item.fields.length; i++) {
          obj1 = {
            id: obj_id_count,
            title: section_item.fields[i].line,
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          };
          array.push(obj1);
          obj_id_count = obj_id_count + 1;
          obj2 = {
            id: obj_id_count,
            title: section_item.fields[i].value,
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          };
          obj_id_count = obj_id_count + 1;
          array.push(obj2);
        }
        obj3 = {
          id: obj_id_count,
          title: "Add Another Checkbox",
          icon: "mdi-checkbox-marked-outline",
          value: true,
        };
        array.push(obj3);
        this.checkbox_items1 = array;
      } else if (section_item.type === "dropselect") {
        this.editfieldshow = "Drop Down";
        obj_id_count = 1;
        array = [];
        for (i = 0; i < section_item.choices.length; i++) {
          obj1 = {
            id: obj_id_count,
            title: section_item.choices[i],
            icon: "mdi-arrow-down-drop-circle-outline",
            value: true,
            type: "drop-down-option",
          };
          array.push(obj1);
          obj_id_count = obj_id_count + 1;
        }
        obj3 = {
          id: obj_id_count,
          title: "Add Another drop-down-option",
          icon: "mdi-form-dropdown",
          value: true,
        };
        array.push(obj3);
        this.drop_down_items1 = array;
      }
    },
    radiobuttonfunc(x) {
      if (x.title === "Add Another Radio Field") {
        var length = this.radio_button_items.length;
        this.radio_button_items = JSON.parse(
          JSON.stringify(this.radio_button_items)
        );
        var multi_radio_button_items;
        (multi_radio_button_items = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
        ]),
          (multi_radio_button_items = JSON.parse(
            JSON.stringify(multi_radio_button_items)
          ));
        this.radio_button_items.splice(length - 1, 0, multi_radio_button_items);
        var merged = [].concat.apply([], this.radio_button_items);
        this.radio_button_items = merged;
        var count = 1;
        this.radio_button_items.forEach(function (obj) {
          obj.id = count;
          count++;
        });
        return;
      }
      x.value = !x.value;
    },
    radiobuttonfuncnew(x) {
      if (x.title === "Add Another Radio Field") {
        var length = this.radio_button_items1.length;
        this.radio_button_items1 = JSON.parse(
          JSON.stringify(this.radio_button_items1)
        );
        var multi_radio_button_items;
        (multi_radio_button_items = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
        ]),
          (multi_radio_button_items = JSON.parse(
            JSON.stringify(multi_radio_button_items)
          ));
        this.radio_button_items1.splice(
          length - 1,
          0,
          multi_radio_button_items
        );
        var merged = [].concat.apply([], this.radio_button_items1);
        this.radio_button_items1 = merged;
        var count = 1;
        this.radio_button_items1.forEach(function (obj) {
          obj.id = count;
          count++;
        });
        return;
      }
      x.value = !x.value;
    },
    radiobuttonitemssubmission(x) {
      var items = JSON.parse(JSON.stringify(this.radio_button_items));
      let statement = items.find((o) => o.type === "text-field");
      statement = statement.title;
      var totalfields = (items.length - 2) / 2;
      let ids = this.document.leftSide.card.find((o) => o.id === x);
      ids.total_fields = ids.total_fields + 1;
      ids.section_id_length = ids.section_id_length + 1;
      var statement_id = "s" + ids.section_id_length;
      var obj3 = {
        textfieldapproval: false,
        dropselect_display: false,
        fields_display: true,
        ishelp: false,
        tiptapedit: false,
        eid: statement_id,
        statement: statement,
        editcontent: false,
        type: "radio",
        length: totalfields,
        value: null,
        fields: [],
      };
      let right_side_text_filter = items.filter(
        (o) => o.type === "right-side-text"
      );
      for (var i = 0; i < right_side_text_filter.length; i++) {
        var right_side_text_value = right_side_text_filter[i].title;
        var right_side_text_value_id = right_side_text_filter[i].id;
        let obj4 = items.find((o) => o.id === right_side_text_value_id - 1);
        var placeholder;
        placeholder = obj4.title;
        var fields2 = {
          tiptapedit: false,
          eid: statement_id + "-ms" + (i + 1),
          line: placeholder,
          value: right_side_text_value,
        };
        obj3.fields.push(fields2);
      }
      ids.section.push(obj3);

      (this.radio_button_items = [
        {
          id: 1,
          title: "",
          icon: "mdi-text-short",
          value: true,
          type: "text-field",
        },
        {
          id: 2,
          title: "",
          icon: "mdi-label-outline",
          value: true,
          type: "label",
        },
        {
          id: 3,
          title: "",
          icon: "mdi-tag-text-outline",
          value: true,
          type: "right-side-text",
        },
        {
          id: 4,
          title: "Add Another Radio Field",
          icon: "mdi-shape-square-rounded-plus",
          value: true,
        },
      ]),
        (this.adddata = false);
    },
    radiobuttonitemssubmissionnew(section_id, y) {
      var items = JSON.parse(JSON.stringify(this.radio_button_items1));
      let right_side_text_filter = items.filter(
        (o) => o.type === "right-side-text"
      );
      var obj3 = [];
      for (var i = 0; i < right_side_text_filter.length; i++) {
        var right_side_text_value = right_side_text_filter[i].title;
        var right_side_text_value_id = right_side_text_filter[i].id;
        let obj4 = items.find((o) => o.id === right_side_text_value_id - 1);
        var placeholder;
        placeholder = obj4.title;
        var fields2 = {
          tiptapedit: false,
          eid: y.eid + "-ms" + (i + 1),
          line: placeholder,
          value: right_side_text_value,
        };
        obj3.push(fields2);
      }
      var x = this.editfieldshow;
      var type;
      if (x === "Text Field") {
        type = "textfield";
      } else if (x === "Radio Button") {
        type = "radio";
      } else if (x === "Check Boxes") {
        type = "checkbox";
      } else if (x === "Drop Down") {
        type = "dropselect";
      }
      y.type = type;
      y.fields = obj3;
      y.length = obj3.length;
      y.editcontent = false;
      this.update_total_fields_of_left_side_of_card(section_id);
    },
    dropdownfunc(x) {
      if (x.title === "Add Another drop-down-option") {
        var length = this.drop_down_items.length;
        this.drop_down_items = JSON.parse(JSON.stringify(this.drop_down_items));
        var multi_drop_down_items;
        (multi_drop_down_items = [
          {
            id: 2,
            title: "",
            icon: "mdi-arrow-down-drop-circle-outline",
            value: true,
            type: "drop-down-option",
          },
        ]),
          (multi_drop_down_items = JSON.parse(
            JSON.stringify(multi_drop_down_items)
          ));
        this.drop_down_items.splice(length - 1, 0, multi_drop_down_items);
        var merged = [].concat.apply([], this.drop_down_items);
        this.drop_down_items = merged;
        var count = 1;
        this.drop_down_items.forEach(function (obj) {
          obj.id = count;
          count++;
        });
        return;
      }
      x.value = !x.value;
    },
    dropdownfuncnew(x) {
      if (x.title === "Add Another drop-down-option") {
        var length = this.drop_down_items1.length;
        this.drop_down_items1 = JSON.parse(
          JSON.stringify(this.drop_down_items1)
        );
        var multi_drop_down_items;
        (multi_drop_down_items = [
          {
            id: 2,
            title: "",
            icon: "mdi-arrow-down-drop-circle-outline",
            value: true,
            type: "drop-down-option",
          },
        ]),
          (multi_drop_down_items = JSON.parse(
            JSON.stringify(multi_drop_down_items)
          ));
        this.drop_down_items1.splice(length - 1, 0, multi_drop_down_items);
        var merged = [].concat.apply([], this.drop_down_items1);
        this.drop_down_items1 = merged;
        var count = 1;
        this.drop_down_items1.forEach(function (obj) {
          obj.id = count;
          count++;
        });
        return;
      }
      x.value = !x.value;
    },
    dropdownoptionitemssubmission(x) {
      var items = JSON.parse(JSON.stringify(this.drop_down_items));
      let statement = items.find((o) => o.type === "text-field");
      statement = statement.title;
      var totalfields = items.length - 2;
      let ids = this.document.leftSide.card.find((o) => o.id === x);
      ids.total_fields = ids.total_fields + 1;
      ids.section_id_length = ids.section_id_length + 1;
      var statement_id = "s" + ids.section_id_length;
      let drop_down_option_filter = items.filter(
        (o) => o.type === "drop-down-option"
      );
      var drop_down_option_filter_array_values = [];
      for (var i = 0; i < drop_down_option_filter.length; i++) {
        drop_down_option_filter_array_values.push(
          drop_down_option_filter[i].title
        );
      }
      var obj3 = {
        tiptapedit: false,
        eid: statement_id,
        statement: statement,
        type: "dropselect",
        length: totalfields,
        editcontent: false,
        value: "",
        choices: drop_down_option_filter_array_values,
        dropselect_display: false, //true
        textfieldapproval: false,
        fields_display: false,
        ishelp: false,
        fields: [],
        dropselect: [],
      };
      ids.section.push(obj3);
      (this.drop_down_items = [
        {
          id: 1,
          title: "",
          icon: "mdi-text-short",
          value: true,
          type: "text-field",
        },
        {
          id: 2,
          title: "",
          icon: "mdi-arrow-down-drop-circle-outline",
          value: true,
          type: "drop-down-option",
        },
        {
          id: 3,
          title: "Add Another drop-down-option",
          icon: "mdi-form-dropdown",
          value: true,
        },
      ]),
        (this.adddata = false);
    },
    dropdownoptionitemssubmissionnew(section_id, y) {
      var items = JSON.parse(JSON.stringify(this.drop_down_items1));
      var fields = [];
      for (var i = 0; i < items.length - 1; i++) {
        fields.push(items[i].title);
      }
      var x = this.editfieldshow;
      var type;
      if (x === "Text Field") {
        type = "textfield";
      } else if (x === "Radio Button") {
        type = "radio";
      } else if (x === "Check Boxes") {
        type = "checkbox";
      } else if (x === "Drop Down") {
        type = "dropselect";
      }
      y.type = type;
      y.choices = fields;
      y.length = fields.length;
      y.editcontent = false;
      this.update_total_fields_of_left_side_of_card(section_id);
    },
    checkboxitemssubmission(x) {
      var items = JSON.parse(JSON.stringify(this.checkbox_items));
      let statement = items.find((o) => o.type === "text-field");
      statement = statement.title;
      var totalfields = (items.length - 2) / 2;
      let ids = this.document.leftSide.card.find((o) => o.id === x);
      ids.total_fields = ids.total_fields + 1;
      ids.section_id_length = ids.section_id_length + 1;
      var statement_id = "s" + ids.section_id_length;
      var obj3 = {
        textfieldapproval: false,
        dropselect_display: false,
        fields_display: true,
        ishelp: false,
        tiptapedit: false,
        eid: statement_id,
        editcontent: false,
        statement: statement,
        type: "checkbox",
        value: [],
        length: totalfields,
        fields: [],
      };
      let right_side_text_filter = items.filter(
        (o) => o.type === "right-side-text"
      );
      for (var i = 0; i < right_side_text_filter.length; i++) {
        var right_side_text_value = right_side_text_filter[i].title;
        var right_side_text_value_id = right_side_text_filter[i].id;
        let obj4 = items.find((o) => o.id === right_side_text_value_id - 1);
        var placeholder;
        placeholder = obj4.title;
        var fields2 = {
          tiptapedit: false,
          eid: statement_id + "-ms" + (i + 1),
          line: placeholder,
          value: right_side_text_value,
        };
        obj3.fields.push(fields2);
      }
      ids.section.push(obj3);
      this.checkbox_items = [
        {
          id: 1,
          title: "",
          icon: "mdi-text-short",
          value: true,
          type: "text-field",
        },
        {
          id: 2,
          title: "",
          icon: "mdi-label-outline",
          value: true,
          type: "label",
        },
        {
          id: 3,
          title: "",
          icon: "mdi-tag-text-outline",
          value: true,
          type: "right-side-text",
        },
        {
          id: 4,
          title: "Add Another Checkbox",
          icon: "mdi-checkbox-marked-outline",
          value: true,
        },
      ];
      this.adddata = false;
    },
    checkboxitemssubmissionnew(section_id, y) {
      var items = JSON.parse(JSON.stringify(this.checkbox_items1));
      let right_side_text_filter = items.filter(
        (o) => o.type === "right-side-text"
      );
      var obj3 = [];
      for (var i = 0; i < right_side_text_filter.length; i++) {
        var right_side_text_value = right_side_text_filter[i].title;
        var right_side_text_value_id = right_side_text_filter[i].id;
        let obj4 = items.find((o) => o.id === right_side_text_value_id - 1);
        var placeholder;
        placeholder = obj4.title;
        var fields2 = {
          tiptapedit: false,
          eid: y.eid + "-ms" + (i + 1),
          line: placeholder,
          value: right_side_text_value,
        };
        obj3.push(fields2);
      }
      var x = this.editfieldshow;
      var type;
      if (x === "Text Field") {
        type = "textfield";
      } else if (x === "Radio Button") {
        type = "radio";
      } else if (x === "Check Boxes") {
        type = "checkbox";
      } else if (x === "Drop Down") {
        type = "dropselect";
      }
      y.type = type;
      y.fields = obj3;
      y.length = obj3.length;
      y.editcontent = false;
      this.update_total_fields_of_left_side_of_card(section_id);
    },
    checkboxfunc(x) {
      if (x.title === "Add Another Checkbox") {
        var length = this.checkbox_items.length;
        this.checkbox_items = JSON.parse(JSON.stringify(this.checkbox_items));
        var multi_checkbox_items;
        (multi_checkbox_items = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
        ]),
          (multi_checkbox_items = JSON.parse(
            JSON.stringify(multi_checkbox_items)
          ));
        this.checkbox_items.splice(length - 1, 0, multi_checkbox_items);
        var merged = [].concat.apply([], this.checkbox_items);
        this.checkbox_items = merged;
        var count = 1;
        this.checkbox_items.forEach(function (obj) {
          obj.id = count;
          count++;
        });
        return;
      }
      x.value = !x.value;
    },
    checkboxfuncnew(x) {
      if (x.title === "Add Another Checkbox") {
        var length = this.checkbox_items1.length;
        this.checkbox_items1 = JSON.parse(JSON.stringify(this.checkbox_items1));
        var multi_checkbox_items;
        (multi_checkbox_items = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "",
            icon: "mdi-tag-text-outline",
            value: true,
            type: "right-side-text",
          },
        ]),
          (multi_checkbox_items = JSON.parse(
            JSON.stringify(multi_checkbox_items)
          ));
        this.checkbox_items1.splice(length - 1, 0, multi_checkbox_items);
        var merged = [].concat.apply([], this.checkbox_items1);
        this.checkbox_items1 = merged;
        var count = 1;
        this.checkbox_items1.forEach(function (obj) {
          obj.id = count;
          count++;
        });
        return;
      }
      x.value = !x.value;
    },
    textfielditemssubmission(x) {
      var items = JSON.parse(JSON.stringify(this.Text_filed_items));
      let statement = items.find((o) => o.type === "text-field");
      statement = statement.title;
      var totalfields = (items.length - 2) / 2;
      let ids = this.document.leftSide.card.find((o) => o.id === x);
      ids.section_id_length = ids.section_id_length + 1;
      var statement_id = "s" + ids.section_id_length;
      var obj3 = {
        eid: statement_id,
        statement: statement,
        type: "textfield",
        length: totalfields,
        textfieldapproval: false,
        dropselect_display: false,
        fields_display: true,
        ishelp: false,
        tiptapedit: false,
        editcontent: false,
        fields: [],
      };
      let slider_filter = items.filter((o) => o.type === "slider");
      for (var i = 0; i < slider_filter.length; i++) {
        var value_slider = slider_filter[i].slidervalue;
        var value_slider_id = slider_filter[i].id;
        let obj4 = items.find((o) => o.id === value_slider_id - 1);
        var placeholder;
        placeholder = obj4.title;
        var fields2 = {
          eid: statement_id + "-ms" + (i + 1),
          line: placeholder,
          value: "",
          size: "col-" + value_slider,
        };
        obj3.fields.push(fields2);
      }
      ids.total_fields = ids.total_fields + obj3.fields.length;
      ids.section.push(obj3);
      (this.Text_filed_items = [
        {
          id: 1,
          title: "",
          icon: "mdi-text-short",
          value: true,
          type: "text-field",
        },
        {
          id: 2,
          title: "",
          icon: "mdi-label-outline",
          value: true,
          type: "label",
        },
        {
          id: 3,
          title: "Add Size of Text Filed",
          icon: "mdi-arrow-left-right-bold-outline",
          value: true,
          type: "slider",
          slidervalue: "6",
        },
        {
          id: 4,
          title: "Add more than one text-filed for one statement",
          icon: "mdi-shape-square-rounded-plus",
          value: true,
        },
      ]),
        (this.adddata = false);
    },
    textfielditemssubmissionnew(section_id, y) {
      var items = JSON.parse(JSON.stringify(this.Text_filed_items1));
      var obj3 = [];
      let slider_filter = items.filter((o) => o.type === "slider");
      for (var i = 0; i < slider_filter.length; i++) {
        var value_slider = slider_filter[i].slidervalue;
        var value_slider_id = slider_filter[i].id;
        let obj4 = items.find((o) => o.id === value_slider_id - 1);
        var placeholder;
        placeholder = obj4.title;
        var fields2 = {
          eid: y.eid + "-ms" + (i + 1),
          line: placeholder,
          value: "",
          size: "col-" + value_slider,
        };
        obj3.push(fields2);
      }
      var x = this.editfieldshow;
      var type;
      if (x === "Text Field") {
        type = "textfield";
      } else if (x === "Radio Button") {
        type = "radio";
      } else if (x === "Check Boxes") {
        type = "checkbox";
      } else if (x === "Drop Down") {
        type = "dropselect";
      }
      y.type = type;
      y.fields = obj3;
      y.length = obj3.length;
      y.editcontent = false;
      this.update_total_fields_of_left_side_of_card(section_id);
    },
    textfiledfunc(x) {
      if (x.title === "Add more than one text-filed for one statement") {
        var length = this.Text_filed_items.length;
        this.Text_filed_items = JSON.parse(
          JSON.stringify(this.Text_filed_items)
        );
        var multi_Text_filed_items;
        (multi_Text_filed_items = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "Add Size of Text Filed",
            icon: "mdi-arrow-left-right-bold-outline",
            value: true,
            type: "slider",
            slidervalue: "6",
          },
        ]),
          (multi_Text_filed_items = JSON.parse(
            JSON.stringify(multi_Text_filed_items)
          ));
        this.Text_filed_items.splice(length - 1, 0, multi_Text_filed_items);
        var merged = [].concat.apply([], this.Text_filed_items);
        this.Text_filed_items = merged;
        var count = 1;
        this.Text_filed_items.forEach(function (obj) {
          obj.id = count;
          count++;
        });
        return;
      }
      x.value = !x.value;
    },
    textfiledfuncnew(x) {
      if (x.title === "Add more than one text-filed for one statement") {
        var length = this.Text_filed_items1.length;
        this.Text_filed_items1 = JSON.parse(
          JSON.stringify(this.Text_filed_items1)
        );
        var multi_Text_filed_items;
        (multi_Text_filed_items = [
          {
            id: 2,
            title: "",
            icon: "mdi-label-outline",
            value: true,
            type: "label",
          },
          {
            id: 3,
            title: "Add Size of Text Filed",
            icon: "mdi-arrow-left-right-bold-outline",
            value: true,
            type: "slider",
            slidervalue: "6",
          },
        ]),
          (multi_Text_filed_items = JSON.parse(
            JSON.stringify(multi_Text_filed_items)
          ));
        this.Text_filed_items1.splice(length - 1, 0, multi_Text_filed_items);
        var merged = [].concat.apply([], this.Text_filed_items1);
        this.Text_filed_items1 = merged;
        var count = 1;
        this.Text_filed_items1.forEach(function (obj) {
          obj.id = count;
          count++;
        });
        return;
      }
      x.value = !x.value;
    },
    cardfiledfunc(x) {
      this.cardfiledshow = x;
    },
    adjust_front_end_inner_heading_value_display(inner_heading_value, display) {
      //CODE 2
      var condition = true;
      var tag_for_front_heading_value_front = "";
      var tag_for_front_heading_value_end = "";
      var string = display;
      while (condition === true) {
        var tag_from_end_string = string.substr(
          string.lastIndexOf("</"),
          string.length
        );
        var tag_front_created = tag_from_end_string.replace("/", "");
        var len = tag_from_end_string.length;
        var tag_from_front_string = string.substr(0, len - 1);
        if (tag_from_front_string === tag_front_created) {
          string = string.substring(
            0,
            string.length - tag_from_end_string.length
          );
          string = string.substring(
            tag_from_front_string.length,
            string.length
          );
          tag_for_front_heading_value_front =
            tag_for_front_heading_value_front + tag_from_front_string;
          tag_for_front_heading_value_end =
            tag_from_end_string + tag_for_front_heading_value_end;
        } else if (tag_from_front_string !== tag_front_created) {
          condition = false;
        }
      }
      var inner_heading_value_display =
        tag_for_front_heading_value_front +
        inner_heading_value.toString() +
        ".\xa0" +
        tag_for_front_heading_value_end;
      return inner_heading_value_display;

      //CODE 1
      // var string= display
      // var tags_in_a_string_from_end = string.substr(string.search("</"),string.length)
      // //loop count
      // var sample_string_for_tags_1 = tags_in_a_string_from_end
      // let count = sample_string_for_tags_1.split("</").length - 1
      // //loopfactor
      // sample_string_for_tags_1 = tags_in_a_string_from_end
      // var tags_in_a_string_from_front=""
      // var tag_extracted_from_string,front_tag,i,inner_heading_value_display; //sample variables
      // for(i=0;i< count; i++){
      //   tag_extracted_from_string = sample_string_for_tags_1.substr(sample_string_for_tags_1.lastIndexOf("</"),sample_string_for_tags_1.length)
      //   front_tag = tag_extracted_from_string.replace('/','');
      //   tags_in_a_string_from_front = tags_in_a_string_from_front.concat(front_tag);
      //   sample_string_for_tags_1= sample_string_for_tags_1.slice(0,sample_string_for_tags_1.lastIndexOf("</"))
      // }
      // if(tags_in_a_string_from_end==="."){
      //   inner_heading_value_display = tags_in_a_string_from_front + inner_heading_value.toString()+ tags_in_a_string_from_end
      //   return inner_heading_value_display
      // }
      // else{
      //   inner_heading_value_display = tags_in_a_string_from_front + inner_heading_value.toString()+ "." + tags_in_a_string_from_end
      //   return inner_heading_value_display
      // }
    },
    onClick() {
      /*this will toggle only by icon click. at the same time, will prevent toggle 
      by clicking on header. */

      const curr = this.panel;
      this.panel = curr === undefined ? 0 : undefined;
    },
    //leftside-card-heading
    onClickOutside3oldfortiptap() {
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

      //     }
      //     // var obj = this.document.rightSide.card[i].section.find((o) => o.dependent_values[0].depend_upon === this.document.rightSide.card[i].name )

      //     // this.document.rightSide.card[i].name =  this.document.leftSide.card[i].name;
      // }
    },
    //leftside-card-heading
    onClickOutside3() {
      var i;
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        this.document.leftSide.card[i].name_edit = false;
        var obj = this.document.rightSide.card[i].section.find(
          (o) =>
            o.dependent_values[0].display ===
            this.document.rightSide.card[i].name
        );
        if (obj !== undefined) {
          obj.dependent_values[0].display = this.document.leftSide.card[i].name;
        }
        this.document.rightSide.card[i].name =
          this.document.leftSide.card[i].name;
      }
      // for (i = 0; i < this.document.rightSide.card.length; i++) {
      //     //var key = this.document.rightSide.card[i].name
      //     for(j=0; j < this.document.rightSide.card[i].section.length ; j++){

      //     }
      //     // var obj = this.document.rightSide.card[i].section.find((o) => o.dependent_values[0].depend_upon === this.document.rightSide.card[i].name )

      //     // this.document.rightSide.card[i].name =  this.document.leftSide.card[i].name;
      // }
    },
    taptapeditorheadingleft(item) {
      // this.editor1 = new Editor({
      //   extensions: [
      //      new Image(),
      //     new Blockquote(),
      //     new BulletList(),
      //     new CodeBlock(),
      //     new HardBreak(),
      //     new Heading({ levels: [1, 2, 3] }),
      //     new HorizontalRule(),
      //     new ListItem(),
      //     new OrderedList(),
      //     new TodoItem(),
      //     new TodoList(),
      //     new Link(),
      //     new Bold(),
      //     new Code(),
      //     new Italic(),
      //     new Strike(),
      //     new Underline(),
      //     new History(),
      //   ],
      //   // content: `
      //   //   <h1>Yay Headlines!</h1>
      //   //   <p>All these <strong>cool tags</strong> are working now.</p>
      //   // `,
      //   content: item.name,
      // });
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
    //rightside card
    onClickOutside2() {
   
      // rightSide
      var i, j;
      for (i = 0; i < this.document.rightSide.card.length; i++) {
        for (j = 0; j < this.document.rightSide.card[i].section.length; j++) {
          if (this.document.rightSide.card[i].section[j].tiptapedit === true) {
            this.document.rightSide.card[i].section[j].tiptapedit = false;
            this.document.rightSide.card[i].section[
              j
            ].dependent_values[0].display =
              this.editor2.view.docView.contentDOM.innerHTML;
          }
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
                  this.document.rightSide.card[i].section[
                    j
                  ].inner_heading_value_display = this.adjust_front_end_inner_heading_value_display(
                    this.document.rightSide.card[i].section[j]
                      .inner_heading_value,
                    this.document.rightSide.card[i].section[j]
                      .dependent_values[0].display
                  );
                  section_counter++;
                }
              }
            }
          }
        }
      }
      // this.right_side_edit_content_card = false;
    },
   
    //leftside card detail
    onClickOutside() {
      var i, j, k;
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        for (j = 0; j < this.document.leftSide.card[i].section.length; j++) {
          //statement checking
          if (this.document.leftSide.card[i].section[j].tiptapedit === true) {
            this.document.leftSide.card[i].section[j].statement =
              this.editor1.view.docView.contentDOM.innerHTML;
            this.document.leftSide.card[i].section[j].tiptapedit = false;
            this.document.leftSide.card[i].isedited = true;
          }
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
                this.document.leftSide.card[i].section[j].dropselect[
                  k
                ].statement = this.editor1.view.docView.contentDOM.innerHTML;
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
                this.document.leftSide.card[i].section[j].fields[k].line =
                  this.editor1.view.docView.contentDOM.innerHTML;
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
                this.document.leftSide.card[i].section[
                  j
                ].dropselect[0].statement =
                  this.editor1.view.docView.contentDOM.innerHTML;
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
                this.document.leftSide.card[i].section[
                  j
                ].textfieldapprovalfields[0].statement =
                  this.editor1.view.docView.contentDOM.innerHTML;
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
                this.document.leftSide.card[i].section[j].fields[k].line =
                  this.editor1.view.docView.contentDOM.innerHTML;
                this.document.leftSide.card[i].isedited = true;
              }
            }
          }
        }
      }
    },
    //tiptap-for-content
    taptapeditoractivateleft(item) {
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
      var local_array = [];
      if (checkboxvalue.length > 0) {
        local_array = checkboxvalue;
      }
      if (card_name !== "") {
        if (!checkboxvalue.includes(card_name)) {
          local_array.push(card_name);
        }
      }
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
        }
      }
    },
    taptapeditoractivateright0(item) {
      item.tiptapedit = true;
      // var val = item.tiptapedit;
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
    taptapeditoractivateright1(item) {
      if (item.tiptapedit === false) {
        for (var i = 0; i < this.document.rightSide.card.length; i++) {
          for (
            var j = 0;
            j < this.document.rightSide.card[i].section.length;
            j++
          ) {
            this.document.rightSide.card[i].section[j].tiptapedit = false;
            this.document.rightSide.card[i].section[j].contentedit = false;
          }
        }console.log(item)
        this.editor2 = new Editor({
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
          content: item.dependent_values[0].display,
        });
        item.tiptapedit = true;
      }
    },
    taptapeditoractivateright(item,id) {
      this.document.rightSide.card.id=id;
      if (item.tiptapedit === false) {
        for (var i = 0; i < this.document.rightSide.card.length; i++) {
          for (
            var j = 0;
            j < this.document.rightSide.card[i].section.length;
            j++
          ) {
            this.document.rightSide.card[i].section[j].tiptapedit = false;
              this.document.rightSide.card[i].section[j].contentedit = false;
          }
        }
        this.editor2 = new Editor({
          extensions: [
            new Blockquote(),
            new BulletList(),
            new CodeBlock(),
            new HardBreak(),
            new Heading({ levels: [1, 2, 3, 4] }),
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
          content: item.dependent_values[0].display,
       
        });
       
        item.tiptapedit = true;
        this.thisitem=item;
      }
    },
    changeicon(a){
      this.iconH=a;
    },
   
    forContent(){

      var Hdata=""
      var Pdata=""
     
      var html=""

var data=this.document.rightSide.card
for (let i = 0; i < data.length; i++) {
 if(data[i].eye===true){
   var section=data[i].section;
for (let j = 0; j < section.length; j++) {
  if(section[j].displayed===true){
    if(section[j].heading_property_number===true){
      Hdata=section[j].display;
html=html+`<b>${Hdata}</b>`;


    }
    if(section[j].heading_property_number===false){
Pdata=section[j].display;
html=html+`<p id=a1>${Pdata}</p>`;

    }
  }
  
}

 }
}
  var Fhtml=`<html>${html}</html>`;
  
  this.contentforedit= Fhtml;
  console.log(this.contentforedit);
console.log(this.$data);
    },
    // taptapeditoractivateright(item) {
    //   if (item.tiptapedit === false) {
    //     for (var i = 0; i < this.document.rightSide.card.length; i++) {
    //       for (
    //         var j = 0;
    //         j < this.document.rightSide.card[i].section.length;
    //         j++
    //       ) {
    //         this.document.rightSide.card[i].section[j].tiptapedit = false;
    //           this.document.rightSide.card[i].section[j].contentedit = false;
    //       }
    //     }
    //     this.editor2 = new Editor({
    //       extensions: [
    //         new Blockquote(),
    //         new BulletList(),
    //         new CodeBlock(),
    //         new HardBreak(),
    //         new Heading({ levels: [1, 2, 3] }),
    //         new HorizontalRule(),
    //         new ListItem(),
    //         new OrderedList(),
    //         new TodoItem(),
    //         new TodoList(),
    //         new Link(),
    //         new Bold(),
    //         new Code(),
    //         new Italic(),
    //         new Strike(),
    //         new Underline(),
    //         new History(),
    //       ],
    //       // content: `
    //       //   <h1>Yay Headlines!</h1>
    //       //   <p>All these <strong>cool tags</strong> are working now.</p>
    //       // `,
    //       content: item.dependent_values[0].display,
    //     });
    //     item.tiptapedit = true;
    //   }
    // },
    // taptapeditoractivateright(item) {
    //   if (item.tiptapedit === false) {
    //     for (var i = 0; i < this.document.rightSide.card.length; i++) {
    //       for (
    //         var j = 0;
    //         j < this.document.rightSide.card[i].section.length;
    //         j++
    //       ) {
    //         // if(JSON.stringify(this.document.rightSide.card[i].section[j]) === JSON.stringify(item)){

    //         // }
    //         this.document.rightSide.card[i].section[j].tiptapedit = false;
    //           this.document.rightSide.card[i].section[j].contentedit = false;
    //       }
    //     }
    //     this.editor2 = new Editor({
    //       extensions: [
    //         new Blockquote(),
    //         new BulletList(),
    //         new CodeBlock(),
    //         new HardBreak(),
    //         new Heading({ levels: [1, 2, 3] }),
    //         new HorizontalRule(),
    //         new ListItem(),
    //         new OrderedList(),
    //         new TodoItem(),
    //         new TodoList(),
    //         new Link(),
    //         new Bold(),
    //         new Code(),
    //         new Italic(),
    //         new Strike(),
    //         new Underline(),
    //         new History(),
    //       ],
    //       // content: `
    //       //   <h1>Yay Headlines!</h1>
    //       //   <p>All these <strong>cool tags</strong> are working now.</p>
    //       // `,
    //       content: item.dependent_values[0].display,
    //     });
    //     item.tiptapedit = true;
    //   }
    // },
    eyefunc(item) {
      this.document.leftSide.card[item - 1].eye =
        !this.document.leftSide.card[item - 1].eye;
      this.document.rightSide.card[item - 1].eye =
        !this.document.rightSide.card[item - 1].eye;
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
    test1() {},
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
      this.rightsidedata = false
    },
    getvalue() {},
    getting_values_and_setting_values(values, card_no, dependent_values) {
      //values-> on_which_depend
      var array = new Array();
      for (var i = 0; i < values.length; i++) {
        if (typeof values[i] === "object") {
          for (const [key, value] of Object.entries(values[i])) {
            var e = this.find_in_left_side(
              key,
              this.document.leftSide.card[card_no].section
            );
            // console.log(e) //label-value
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
      var count = 0;
      for (var k = 0; k < array.length; k++) {
        if (array[k] !== undefined && array[k] !== "" && array[k] !== null) {
          if (array[k].length !== 0) {
            count = count + 1;
          } else {
            count = count + 1;
          }
        }
      }
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
          } else {
            var values_that_edit_string = this.find_in_left_side(
              dependent_values[i].depend_upon[j],
              this.document.leftSide.card[card_no].section
            );
            values_that_edit_string_array.push(values_that_edit_string);
          }
        }
      }
      for (i = 0; i < dependent_values.length; i++) {
        var a = dependent_values[i].display;
        if (dependent_values[i].depend_upon.length === 0) {
          return a;
        }

        for (j = 0; j < values_that_edit_string_array.length; j++) {
          var val = values_that_edit_string_array[j];
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
            // console.log(section[i])
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
      var a2 = localStorage.getItem("current_contract_group_title");
      this.add_original_contract_when_one_contract_updates(a1, a2);
    },
    add_original_contract_when_one_contract_updates(
      contact_org_name,
      group_title
    ) {
      var a = store.getters.checkByGroupName(group_title);
      if (a[0].keep_original_contract === true) {
        var b = this.copy_creation_of_contract(contact_org_name, group_title);
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
      var a1 = localStorage.getItem("current_contract_title");
      var a2 = localStorage.getItem("current_contract_group_title");
      let b = JSON.stringify(this.document);

      if (!(a1 + "-" + a2 in val)) {
        this.create_copy_of_contract_when_selected_specific_condition_admin();
      }
      val[a1 + "-" + a2] = b;
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
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile("./" + admin_name + ".json", encrypteddata, function () {});
    },
  },
};
</script>
<style lang="scss">
.ProseMirror:focus {
    outline: none;
}
.ProseMirror {

  table {
    border-collapse: collapse;
    table-layout: auto;
    width: 50%;
    margin: 0;
    
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0; right: 0; top: 0; bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }
  }
}

.tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
</style>
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

table{
  border:2px solid;
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

