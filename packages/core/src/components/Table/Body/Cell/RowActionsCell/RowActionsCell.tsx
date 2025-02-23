import { ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import Checkbox from '../../../../Checkbox';
import { LoadingDiv } from '../Styled';
import { RowActionsCellStyled } from './RowActionsCell.styled';
import { RowActionProps } from './types';

const Component: FC<RowActionProps> = memo(props => {
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);
    const {
        isLoading,
        isRowExpanded,
        isRowExpandable,
        isRowSelectable,
        isRowSelected,
        isRowIndeterminate,
        isRowSelectionDisabled,
        onRowSelection,
        onRowExpansionIconClick,
        tableSize,
        isGroupedTable,
        showShadowAtRight,
        isNavigated
    } = props;

    return (
        <RowActionsCellStyled
            onClick={stopPropagation}
            isLoading={isLoading}
            isRowExpanded={isRowExpanded}
            isRowExpandable={isRowExpandable}
            isRowSelectable={isRowSelectable}
            isRowSelected={isRowSelected}
            tableSize={tableSize}
            isGroupedTable={isGroupedTable}
            showShadowAtRight={showShadowAtRight}
            isNavigated={isNavigated}
        >
            {isLoading ? (
                <LoadingDiv />
            ) : (
                <>
                    {isRowExpandable && <ExpandMoreIcon size={tableSize === 'L' ? 'M' : 'S'} onClick={onRowExpansionIconClick} />}
                    {isRowSelectable && (
                        <Checkbox
                            size={tableSize === 'XS' ? tableSize : undefined}
                            indeterminate={isRowIndeterminate}
                            disabled={isRowSelectionDisabled}
                            checked={isRowSelected}
                            onChange={onRowSelection}
                            onClick={stopPropagation}
                        />
                    )}
                </>
            )}
        </RowActionsCellStyled>
    );
});
Component.displayName = 'RowActionsCell';
export const RowActionsCell: FC<RowActionProps> & WithStyle = Object.assign(Component, { Style: RowActionsCellStyled });
