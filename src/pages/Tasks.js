import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "../styles/Tasks.module.css";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faPlus, faX } from "@fortawesome/free-solid-svg-icons";

const YourComponent = () => {
  const iconStyle = { cursor: "pointer", fontWeight: "600" };
  const [addTaskMode, setAddTaskMode] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    color: "white",
    repeat: "Daily",
    tag: "",
  });
  const [tasks, setTasks] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [tagAddedNotifier, setTagAddedNotifier] = useState(false);
  const [selectedRepeat, setSelectedRepeat] = useState("Daily");

  const handlePlusClick = () => {
    setAddTaskMode(!addTaskMode);
  };

  const handleInputChange = (field, value) => {
    setTaskData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddTagClick = () => {
    if (taskData.tag.trim() !== "") {
      setTaskData((prevData) => ({
        ...prevData,
        tag: taskData.tag.trim(),
      }));

      setTagAddedNotifier(true);

      setTimeout(() => {
        setTagAddedNotifier(false);
      }, 2000);
    }
  };

  const handleAddTaskClick = () => {
    if (taskData.title.trim() !== "") {
      const newTask = {
        title: taskData.title,
        description: taskData.description,
        color: taskData.color,
        repeat: taskData.repeat,
        tag: taskData.tag,
      };

      setTasks((prevTasks) => [newTask, ...prevTasks]);

      setTaskData({
        title: "",
        description: "",
        color: "black",
        repeat: "Daily",
        tag: "",
      });

      setAddTaskMode(false);
    }
  };

  const handleColorClick = (color) => {
    setTaskData((prevData) => ({
      ...prevData,
      color: color,
    }));
    setSelectedColor(color);
  };

  const handleRepeatChange = (repeatOption) => {
    setTaskData((prevData) => ({
      ...prevData,
      repeat: repeatOption,
    }));
    setSelectedRepeat(repeatOption);
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderTaskContent = () => {
    if (addTaskMode) {
      return (
        <div className={`${styles.InputDiv} ${styles.ActiveInput}`}>
          <div className={styles.InputWrapper}>
            <input
              type="text"
              placeholder="Task title"
              className={styles.TaskInput}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </div>
          <div className={styles.InputWrapper}>
            <input
              type="text"
              placeholder="Task description"
              className={styles.TaskInput}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>
          <div className={styles.Colors}>
            <div className={styles.CardColorWrapper}>
              <p className={styles.CardColor}>Card Color</p>
            </div>
            <div className={styles.PaletteDiv}>
              {[
                "black",
                "#ADF7B6",
                "#A817C0",
                "#B0FFFA",
                "#FCFF52",
                "#4EFF31",
                "#5BFFD8",
                "#0038FF",
                "#622BFF",
                "#D21DFF",
                "#B92350",
                "#FF0000",
                "#E9E3E8",
                "#554E55",
              ].map((color, index) => (
                <div
                  key={index}
                  className={`${styles.ColorPalette} ${
                    selectedColor === color ? styles.SelectedColor : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>
            <div className={styles.TasksFooter}>
              <div className={styles.RepeatTagInfo}>
                <div className={styles.Repeat}>Repeat</div>
                <div className={styles.TwoSections}>
                  <div className={styles.RepeatButtons}>
                    <button
                      className={`${styles.FirstBtn} ${
                        selectedRepeat === "Daily" ? styles.SelectedRepeat : ""
                      }`}
                      onClick={() => handleRepeatChange("Daily")}
                    >
                      Daily
                    </button>
                    <button
                      className={`${styles.SecondBtn} ${
                        selectedRepeat === "Weekly" ? styles.SelectedRepeat : ""
                      }`}
                      onClick={() => handleRepeatChange("Weekly")}
                    >
                      Weekly
                    </button>
                    <button
                      className={`${styles.ThirdBtn} ${
                        selectedRepeat === "Monthly"
                          ? styles.SelectedRepeat
                          : ""
                      }`}
                      onClick={() => handleRepeatChange("Monthly")}
                    >
                      Monthly
                    </button>
                  </div>
                  <div className={styles.TagSection}>
                    <input
                      placeholder="Set a tag for your task"
                      className={styles.TagInput}
                      onChange={(e) => handleInputChange("tag", e.target.value)}
                      value={taskData.tag}
                    />
                    <button
                      className={styles.AddTagBtn}
                      onClick={handleAddTagClick}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {tagAddedNotifier && (
                <div className={styles.TagAddedNotifier}>
                  Tag added successfully!
                </div>
              )}
            </div>
          </div>
          <button className={styles.AddTaskBtn} onClick={handleAddTaskClick}>
            Add Task
          </button>
        </div>
      );
    } else if (tasks.length > 0) {
      return null;
    } else {
      return (
        <>
          <img
            src="./assets/empty.png"
            alt="empty"
            className={styles.TaskImage}
          />
          <p className={styles.TaskText}>New Task</p>
        </>
      );
    }
  };

  const renderTasks = () => {
    return tasks.map((task, index) => (
      <div
        key={index}
        className={styles.Task}
        style={{ backgroundColor: task.color }}
      >
        <div className={styles.TaskContent}>
          <p>{task.title}</p>
          <p className={styles.Desc}>
            {task.description.length > 14
              ? `${task.description.substring(0, 14)}...`
              : task.description}
          </p>
          <p className={styles.RepeatTagInfo}>
            {task.repeat && (
              <span className={styles.RepeatInfo}>{task.repeat}</span>
            )}
            {task.tag && <span className={styles.TagInfo}>{task.tag}</span>}
          </p>
        </div>
        <button
          className={styles.CompleteButton}
          onClick={() => handleCompleteTask(index)}
        >
          Complete
        </button>
      </div>
    ));
  };

  const renderTaskCount = () => {
    if (tasks.length === 0) {
      return (
        <div className={styles.TaskCountBody}>
          <div>Today</div>
          <div>0</div>
        </div>
      );
    } else {
      return (
        <div className={styles.TaskCountBody}>
          <div>Today</div>
          <div>{tasks.length}</div>
        </div>
      );
    }
  };

  return (
    <section className={styles.TasksContainer}>
      <div className={styles.LeftSide}>
        <div className={styles.LogoDiv}>
          <img
            src="./assets/logo.svg"
            alt="logo"
            className={styles.LogoImage}
          />
        </div>
        <div className={styles.CalendarContainer}>
          <Calendar className={styles.CustomCalendar} />
        </div>
        <div className={styles.TaskCount}>
          <div className={styles.TaskCountTitle}>Tasks</div>
          {renderTaskCount()}
        </div>
      </div>
      <div className={styles.RightSide}>
        <div className={styles.IconSide}>
          <FontAwesomeIcon icon={faBell} style={iconStyle} />
          <FontAwesomeIcon icon={faUser} style={iconStyle} />
        </div>
        <div className={styles.Today}>{addTaskMode ? "New Task" : "Today"}</div>
        <div className={styles.TaskBody}>
          {renderTaskContent()}
          {renderTasks()}
        </div>
        <div className={styles.TaskFooter}>
          <div className={styles.PlusBackground} onClick={handlePlusClick}>
            <FontAwesomeIcon
              icon={addTaskMode ? faX : faPlus}
              style={iconStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
