"""add:genle

Revision ID: 97bbb33d7a3c
Revises: a74229598295
Create Date: 2023-12-03 07:32:59.229516

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision: str = '97bbb33d7a3c'
down_revision: Union[str, None] = 'a74229598295'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('genles',
    sa.Column('id', sa.Integer(), nullable=False, comment='id'),
    sa.Column('name', sa.String(length=30), nullable=True, comment='name'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_genles_id'), 'genles', ['id'], unique=False)
    op.alter_column('users', 'name',
               existing_type=mysql.VARCHAR(length=16),
               type_=sa.String(length=30),
               existing_nullable=True)
    op.alter_column('users', 'email',
               existing_type=mysql.VARCHAR(length=30),
               type_=sa.String(length=50),
               existing_nullable=True)
    op.alter_column('users', 'hashed_password',
               existing_type=mysql.VARCHAR(length=30),
               type_=sa.String(length=50),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'hashed_password',
               existing_type=sa.String(length=50),
               type_=mysql.VARCHAR(length=30),
               existing_nullable=True)
    op.alter_column('users', 'email',
               existing_type=sa.String(length=50),
               type_=mysql.VARCHAR(length=30),
               existing_nullable=True)
    op.alter_column('users', 'name',
               existing_type=sa.String(length=30),
               type_=mysql.VARCHAR(length=16),
               existing_nullable=True)
    op.drop_index(op.f('ix_genles_id'), table_name='genles')
    op.drop_table('genles')
    # ### end Alembic commands ###
