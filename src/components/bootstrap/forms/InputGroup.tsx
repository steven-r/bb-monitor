import React, {
	Children,
	cloneElement,
	forwardRef,
	JSXElementConstructor,
	ReactElement,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TagWrapper from '../../TagWrapper';
import Validation from './Validation';

interface IInputGroupTextProps {
	tag?: 'span' | 'div' | 'label';
	children: ReactElement<any, string | JSXElementConstructor<any>>;
	id?: string;
	className?: string;
	[key: string]: any;
}
export const InputGroupText = forwardRef<HTMLDivElement, IInputGroupTextProps>(
	({ tag, id, className, children, ...props }, ref) => {
		return (
			<TagWrapper
				tag={tag}
				ref={ref}
				id={id}
				className={classNames('input-group-text', className)}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children?.props?.type
					? cloneElement(children, { isFormCheckInput: true })
					: children}
			</TagWrapper>
		);
	},
);
InputGroupText.displayName = 'InputGroupText';
InputGroupText.propTypes = {
	tag: PropTypes.oneOf(['span', 'div', 'label']),
	// @ts-ignore
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
};
InputGroupText.defaultProps = {
	tag: 'span',
	id: undefined,
	className: undefined,
};

interface IInputGroupProps {
	children: IInputGroupTextProps[];
	id?: string;
	className?: string;
	isWrap?: boolean;
	size?: 'sm' | 'lg';
	[key: string]: any;
}
const InputGroup = forwardRef<HTMLDivElement, IInputGroupProps>(
	({ id, className, children, isWrap, size, ...props }, ref) => {
		let IS_VALID = false;
		let IS_TOUCHED = false;
		let INVALID_FEEDBACK = undefined;
		let VALID_FEEDBACK = undefined;
		let IS_TOOLTIP_FEEDBACK = false;

		const validClass = (child: IInputGroupTextProps[]) => {
			for (let i = 0; i < child?.length; i += 1) {
				if (child[i].props.isValid) {
					IS_VALID = true;
				}
				if (child[i].props.isTouched) {
					IS_TOUCHED = true;
				}
				if (child[i].props.invalidFeedback) {
					INVALID_FEEDBACK = child[i].props.invalidFeedback;
				}
				if (child[i].props.validFeedback) {
					VALID_FEEDBACK = child[i].props.validFeedback;
				}
				if (child[i].props.isTooltipFeedback) {
					IS_TOOLTIP_FEEDBACK = true;
					break;
				}
			}
		};
		validClass(children);

		return (
			<div
				ref={ref}
				id={id}
				className={classNames(
					'input-group',
					{
						'flex-nowrap': !isWrap,
						[`input-group-${size}`]: size,
						'has-validation':
							(!IS_VALID && IS_TOUCHED && (INVALID_FEEDBACK || VALID_FEEDBACK)) ||
							(IS_VALID && VALID_FEEDBACK),
					},
					className,
				)}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{Children.map(children, (item, index) =>
					item?.props?.isValidMessage
						? // @ts-ignore
						  // eslint-disable-next-line react/no-array-index-key
						  cloneElement(item, { key: index, isValidMessage: false })
						: // @ts-ignore
						  // eslint-disable-next-line react/no-array-index-key
						  cloneElement(item, { key: index }),
				)}
				<Validation
					isTouched={IS_TOUCHED}
					validFeedback={VALID_FEEDBACK}
					invalidFeedback={INVALID_FEEDBACK}
					isTooltip={IS_TOOLTIP_FEEDBACK}
				/>
			</div>
		);
	},
);
InputGroup.displayName = 'InputGroup';
InputGroup.propTypes = {
	// @ts-ignore
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
	/**
	 * Input groups wrap by default via wrap in order to accommodate custom form field validation within an input group. You may disable this with `isWrap={false}`.
	 */
	isWrap: PropTypes.bool,
	size: PropTypes.oneOf(['sm', 'lg']),
};
InputGroup.defaultProps = {
	id: undefined,
	className: undefined,
	isWrap: true,
	size: undefined,
};

export default InputGroup;
