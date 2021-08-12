import { FC } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import useTodo from '../../hooks/useTodo';
import Todo from '../../types/Todo';
import mapIndexToOrder from '../../util/mapIndexToOrder';
import moveArrayItem from '../../util/moveArrayItem';
import Checkbox from '../Checkbox';
import TodoItem from '../TodoItem';

const TodoList: FC = () => {
  const { todos, updateTodoOrders, includeCompleted, toggleCompletedTodos } =
    useTodo();

  const dragEnd = (dropResult: DropResult) => {
    const startIdx = dropResult.source.index;
    const endIdx = dropResult.destination?.index || 0;

    const shiftedArray = moveArrayItem<Todo>(todos, startIdx, endIdx);

    const indexMappedArray = mapIndexToOrder(shiftedArray);

    updateTodoOrders(indexMappedArray);
  };

  return (
    <div>
      <div>
        <span>Show Completed Todos</span>
        <Checkbox value={includeCompleted} onClick={toggleCompletedTodos} />
      </div>
      <DragDropContext onDragEnd={dragEnd}>
        <Droppable droppableId='todoList'>
          {(provided, _) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, idx) => (
                <Draggable key={todo.id} draggableId={todo.title} index={idx}>
                  {(provided, _) => (
                    <li ref={provided.innerRef} {...provided.draggableProps}>
                      <TodoItem
                        todo={todo}
                        dragHandleProps={provided.dragHandleProps}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
